import jwt, { SignOptions } from 'jsonwebtoken';
import { envConfig } from '~/config/envConfig';

export interface TokenPayload {
    id: string;
    role: 'admin' | 'user';
}

const ACCESS_SECRET = envConfig.jwt.accessSecret;
const REFRESH_SECRET = envConfig.jwt.refreshSecret;
const ACCESS_EXPIRES = envConfig.jwt.accessExpires || '1h';
const REFRESH_EXPIRES = envConfig.jwt.refreshExpires || '7d';

// đảm bảo env được set
if (!ACCESS_SECRET || !REFRESH_SECRET) {
    throw new Error('JWT secrets are not defined in environment variables');
}

export const generateAccessToken = (payload: TokenPayload) => {
    const options: SignOptions = { expiresIn: ACCESS_EXPIRES as any };
    return jwt.sign(payload, ACCESS_SECRET, options);
};

export const generateRefreshToken = (payload: TokenPayload) => {
    const options: SignOptions = { expiresIn: REFRESH_EXPIRES as any };
    return jwt.sign(payload, REFRESH_SECRET, options);
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, ACCESS_SECRET);
};

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, REFRESH_SECRET);
};
