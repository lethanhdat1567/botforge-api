import { z } from 'zod';

// Register schema
export const registerSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email format'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/, 'Password must include uppercase, lowercase, and number'),
    displayName: z.string().optional()
});

// Login schema
export const loginSchema = z.object({
    emailOrUsername: z.string().min(1, 'Email or username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

// Refresh token schema
export const refreshTokenSchema = z.object({
    refresh_token: z.string().min(1, 'Refresh token is required')
});

// Forgot password schema
export const forgotPasswordSchema = z.object({
    email: z.string().email()
});

export const resetPasswordSchema = z.object({
    email: z.string().email('Invalid email format'),
    newPassword: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/, 'Password must include uppercase, lowercase, and number')
});
