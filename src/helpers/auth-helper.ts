import { z } from 'zod';
import { authCode } from '~/constants/auth';

export function mapZodIssueToCode(issue: z.ZodIssue) {
    switch (issue.code) {
        case 'too_small':
        case 'too_big':
            return authCode.FIELD_REQUIRED;

        case 'invalid_type':
        case 'invalid_format':
        case 'invalid_union':
        case 'invalid_key':
        case 'invalid_element':
        case 'invalid_value':
        case 'not_multiple_of':
        case 'unrecognized_keys':
            if (issue.path[0] === 'email') return authCode.EMAIL_INVALID;
            if (issue.path[0] === 'password') return authCode.PASSWORD_WEAK;
            if (issue.path[0] === 'username') return authCode.USERNAME_INVALID;
            return authCode.FIELD_REQUIRED;

        case 'custom':
            if (issue.path[0] === 'confirmPassword') return authCode.PASSWORD_MISMATCH;
            return authCode.FIELD_REQUIRED;

        default:
            return authCode.FIELD_REQUIRED;
    }
}

export function formatZodErrors(errors: z.ZodError['issues']) {
    return errors.map((err) => ({
        field: err.path[0] || 'unknown',
        message: err.message,
        code: mapZodIssueToCode(err)
    }));
}
