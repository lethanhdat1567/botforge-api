import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import googleDriveService from '~/services/googleDrive.service';

async function backupDB() {
    const backupDir = path.join(process.cwd(), 'backup');
    const fileName = `todo-${new Date().toISOString().split('T')[0]}.sql`;
    const outputFile = path.join(backupDir, fileName);

    // 1. Đảm bảo thư mục backup tồn tại
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
        const outputStream = fs.createWriteStream(outputFile);

        // 2. Kiểm tra thông tin -u và -p (phải dính liền hoặc dùng --user=...)
        // Hãy chắc chắn mật khẩu 'admin' là đúng cho máy chủ InterData
        const mysqldump = spawn('mysqldump', [
            `-u${process.env.DATABASE_USER}`,
            `-p${process.env.DATABASE_PASSWORD}`,
            `${process.env.DATABASE_NAME}`
        ]);

        mysqldump.stdout.pipe(outputStream);

        // Bắt lỗi mysqldump (Sai pass, sai tên DB...)
        mysqldump.stderr.on('data', (data) => {
            console.error(`Mysqldump Error: ${data}`);
        });

        mysqldump.on('close', async (code) => {
            outputStream.end();

            if (code !== 0) {
                if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
                return reject(new Error(`mysqldump exited with code ${code}`));
            }
        });

        outputStream.on('finish', async () => {
            try {
                // Kiểm tra file có nội dung không
                const stats = fs.statSync(outputFile);
                if (stats.size === 0) {
                    throw new Error('File backup bị trống (0 bytes).');
                }

                console.log(`Đang upload: ${fileName} (${stats.size} bytes)`);
                await googleDriveService.uploadToDrive(outputFile, fileName);
                console.log('Upload hoàn tất!');

                // (Tùy chọn) Xóa file local sau khi upload xong để tiết kiệm dung lượng VPS
                // fs.unlinkSync(outputFile);

                resolve(true);
            } catch (err) {
                console.error('Lỗi sau khi ghi file:', err);
                reject(err);
            }
        });

        outputStream.on('error', (err) => {
            console.error('Stream Error:', err);
            reject(err);
        });
    });
}

export default backupDB;
