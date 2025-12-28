import { runFlow } from '~/core/facebook/engine/engine';
import { endFlowHandller } from '~/core/facebook/engine/handlers/flow';
import { ActionNode } from '~/core/facebook/engine/types/action';
import userStore from '~/core/facebook/store/userStore';
import { parseDuration } from '~/utils/time';

export async function handleActionNode(node: ActionNode, senderId: string, pageId: string) {
    const payload = node.payload;

    for (const action of payload) {
        switch (action.type) {
            case 'condition': {
                const items = action.fields.items;

                for (const item of items) {
                    const user = userStore.getUser(pageId, senderId);

                    const isAllTrue = item.conditions.every((cond) => {
                        const valueToCheck = user?.getVariable(cond.field);

                        if (valueToCheck === undefined) {
                            return false;
                        }

                        switch (cond.operator) {
                            case 'equals':
                                return valueToCheck === cond.value;

                            case 'not_equals':
                                return valueToCheck !== cond.value;

                            case 'contains':
                                return valueToCheck.includes(cond.value);

                            case 'regex':
                                return new RegExp(cond.value).test(valueToCheck);

                            default:
                                return false;
                        }
                    });

                    if (isAllTrue) {
                        runFlow(item.next, senderId, pageId);
                        return;
                    }
                }
                break;
            }

            case 'delay': {
                await new Promise((res) => setTimeout(res, parseDuration(action.fields.duration)));
                break;
            }

            case 'set_variable': {
                const user = userStore.getUser(pageId, senderId);

                if (!user) {
                    console.log('User not found in set variable');
                    endFlowHandller(pageId, senderId);
                    return;
                }
                user.variables[action.fields.key] = action.fields.value;
                console.log(`[Set Variable] ${action.fields.key} = ${action.fields.value}`);
                break;
            }
        }
    }

    const nextNodeId = node.children?.next;
    if (nextNodeId) {
        runFlow(nextNodeId, senderId, pageId);
    } else {
        endFlowHandller(pageId, senderId);
    }
}
