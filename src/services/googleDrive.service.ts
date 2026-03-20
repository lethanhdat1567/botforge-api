import { google } from 'googleapis';
import fs from 'fs';
import { envConfig } from '~/config/envConfig';

class GoogleDriveService {
    private drive;

    constructor() {
        const oAuth2Client = new google.auth.OAuth2(
            envConfig.google.clientId,
            envConfig.google.clientSecret,
            'https://developers.google.com/oauthplayground'
        );

        oAuth2Client.setCredentials({
            refresh_token: envConfig.google.refreshToken
        });

        this.drive = google.drive({
            version: 'v3',
            auth: oAuth2Client
        });
    }

    async uploadToDrive(filePath: string, fileName: string) {
        try {
            const response = await this.drive.files.create({
                requestBody: {
                    name: fileName,
                    parents: [envConfig.google.driveFolderId]
                },
                media: {
                    mimeType: 'application/octet-stream',
                    body: fs.createReadStream(filePath)
                },
                fields: 'id'
            } as any);

            console.log(`Backup thành công! ID: ${response.data.id}`);
            return response.data.id;
        } catch (error) {
            console.error('Lỗi Upload google drive:', error);
            throw error;
        }
    }
}

export default new GoogleDriveService();
