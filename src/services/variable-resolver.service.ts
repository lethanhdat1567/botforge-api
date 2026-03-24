import { prisma } from '~/config/prisma';

class VariableResolverService {
    async resolve(flowRecordId: string, content: string): Promise<string> {
        if (!content || !content.includes('{{')) return content;

        const flowRecord = await prisma.flowRecord.findUnique({
            where: { id: flowRecordId },
            select: { variables: true }
        });

        const varData = (flowRecord?.variables as Record<string, any>) || {};

        return content.replace(/{{(.*?)}}/g, (match, key) => {
            const cleanKey = key.trim();

            if (cleanKey in varData) {
                const value = varData[cleanKey];
                return value !== null && value !== undefined ? String(value) : '';
            }

            return match;
        });
    }
}

export const variableResolverService = new VariableResolverService();
