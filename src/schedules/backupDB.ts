import { spawn } from 'child_process';
import fs from 'fs';
import { envConfig } from '~/config/envConfig.js';
import { emailService } from '~/services/email.service.js';

async function backupDB() {
    const fileName = `todo-${new Date().toISOString().split('T')[0]}.sql`;
    const outputFile = `./backup/${fileName}`;

    const outputStream = fs.createWriteStream(outputFile);

    const mysqldump = spawn('mysqldump', ['-uadmin', '-padmin', 'botforge']);

    mysqldump.stdout.pipe(outputStream);

    mysqldump.on('close', async (code) => {
        outputStream.end();

        if (code === 0) {
            console.log(`Backup success: ${outputFile}`);

            try {
                // await googleDriveService.uploadFile(outputFile, envConfig.googleDriveBackupFolder);
                // console.log('Upload to Google Drive success');
                // await emailService.sendMail(
                //     envConfig.googleAppUser,
                //     'Backup database',
                //     `<p>Backup database success</p>`
                // );
            } catch (err) {
                console.error('Upload failed:', err);
            }
        } else {
            fs.unlinkSync(outputFile);
        }
    });
}

export default backupDB;
