import jwt, { SignOptions } from 'jsonwebtoken';

export interface TokenPayload {
    userId: string;
    role: 'admin' | 'user';
}

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES || '1d';
const REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES || '7d';

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
