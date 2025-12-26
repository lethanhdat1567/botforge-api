import { CollectionNode } from '../types/collection';
import { context } from '../context';
import { runFlow } from '../engine';

export function handleCollectionNode(node: CollectionNode) {
    const payload = node.payload;
    const variables = payload.fields.variables;

    variables.forEach((variable) => {
        let value = variable.value ?? null;

        // Nếu có regex, validate
        if (variable.regex && value !== null) {
            const regex = new RegExp(variable.regex);
            if (!regex.test(value)) {
                console.warn(`[Collection] Value of ${variable.key} does not match regex.`);
                value = null; // invalid
            }
        }

        context.variables[variable.key] = value;
        console.log(`[Collection] Set ${variable.key} = ${value}`);
    });

    // Chạy node tiếp theo nếu có
    const nextNodeId = payload.fields.next;
    if (nextNodeId) runFlow(nextNodeId);
}
