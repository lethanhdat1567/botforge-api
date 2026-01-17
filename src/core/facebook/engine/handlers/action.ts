import { runFlow } from '~/core/facebook/engine/engine';
import { endFlowHandller } from '~/core/facebook/engine/handlers/flow';
import { ActionNode } from '~/core/facebook/engine/types/action';
import userStore from '~/core/facebook/store/userStore';
import { durationWithUnitToMs, parseDuration } from '~/utils/time';

export async function handleActionNode(node: ActionNode, senderId: string, pageId: string) {
    const payload = node.payload;

    for (const action of payload) {
        switch (action.type) {
            case 'condition': {
                const { items, next } = action.fields;
                const user = userStore.getUser(pageId, senderId);

                const isAllTrue = items.every((item) => {
                    const valueToCheck = user?.getVariable(item.field);

                    if (valueToCheck === undefined) {
                        return false;
                    }

                    switch (item.operator) {
                        case 'equals':
                            return valueToCheck === item.value;

                        case 'not_equals':
                            return valueToCheck !== item.value;

                        case 'contains':
                            return typeof valueToCheck === 'string' && valueToCheck.includes(item.value);

                        case 'regex':
                            return new RegExp(item.value).test(String(valueToCheck));

                        default:
                            return false;
                    }
                });

                if (isAllTrue) {
                    runFlow(next, senderId, pageId);
                    return;
                }

                break;
            }

            case 'delay': {
                console.log(action);

                await new Promise((res) =>
                    setTimeout(res, durationWithUnitToMs(Number(action.fields.duration), action.fields.unit))
                );
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
