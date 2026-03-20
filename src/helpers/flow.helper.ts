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
