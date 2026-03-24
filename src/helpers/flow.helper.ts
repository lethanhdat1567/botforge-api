import { variableResolverService } from '~/services/variable-resolver.service';
import { AnyButton } from '~/types/flows/base.type';

export const getCurrentNodeAndLogicJson = (
    flow: any,
    currentNodeId?: string | null
): { currentNode: any | null; logicJson: Record<string, any> | null } => {
    if (!flow || !currentNodeId) return { currentNode: null, logicJson: {} };

    const logicJson = flow?.logicJson as Record<string, any>;
    if (!logicJson) return { currentNode: null, logicJson: {} };

    const currentNode = logicJson[currentNodeId] || null;

    if (!currentNode) return { currentNode: null, logicJson: {} };

    return { currentNode, logicJson };
};

export const formatButtons = async (buttons: AnyButton[], flowRecordId: string) => {
    const buttonPromises = buttons.map(async (button) => {
        if (button.type === 'continue' || button.type === 'postback') {
            const resolvedTitle = await variableResolverService.resolve(flowRecordId, button.title);
            return {
                type: 'postback',
                title: resolvedTitle,
                payload: JSON.stringify({ ...button.payload, flowRecordId })
            };
        }

        if (button.type === 'web_url') {
            const resolvedTitle = await variableResolverService.resolve(flowRecordId, button.title);
            return {
                type: 'web_url',
                title: resolvedTitle,
                url: button.payload.url
            };
        }

        return null;
    });

    const resolvedButtons = await Promise.all(buttonPromises);

    return resolvedButtons.filter(Boolean);
};
