export const envConfig = {
    port: parseInt(process.env.PORT || '8000'),
    baseUrl: process.env.BASE_URL || 'http://localhost:8000',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
    ngrokUrl: process.env.NGROK_URL,

    jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        accessExpires: process.env.ACCESS_EXPIRES || '1h',
        refreshExpires: process.env.REFRESH_EXPIRES || '7d'
    },

    database: {
        url: process.env.DATABASE_URL
    },

    mail: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT || '587'),
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
        from: process.env.MAIL_FROM
    },

    facebook: {
        appId: process.env.FACEBOOK_APP_ID,
        appSecret: process.env.FACEBOOK_APP_SECRET,
        verifyToken: process.env.VERIFY_TOKEN
    },

    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
        driveFolderId: process.env.GOOGLE_DRIVE_FOLDER_ID
    }
};
