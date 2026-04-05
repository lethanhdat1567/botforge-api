export const httpCode = {
    success: {
        ok: 200,
        created: 201,
        noContent: 204
    },

    clientError: {
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        notFound: 404,
        conflict: 409
    },

    serverError: {
        internalServerError: 500,
        badGateway: 502
    }
} as const;
