import { runFlow } from '~/core/engine/engine';
import endFlowHandller from '~/core/engine/handlers/endFlow';
import { ActionNode } from '~/core/engine/types/action';
import userStore from '~/core/store/userStore';
import { parseDuration } from '~/utils/time';

export async function handleActionNode(node: ActionNode, senderId: string, pageId: string) {
    const payload = node.payload;

    switch (payload.type) {
        case 'condition': {
            const items = payload.fields.items;
            let matched = false;

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
                    matched = true;
                    runFlow(item.next, senderId, pageId);
                    break;
                }
            }

            if (!matched && payload.fields.defaultNext) {
                runFlow(payload.fields.defaultNext, senderId, pageId);
            }
            break;
        }

        case 'delay': {
            await new Promise((res) => setTimeout(res, parseDuration(payload.fields.duration)));
            if (payload.fields.next) runFlow(payload.fields.next, senderId, pageId);
            break;
        }

        case 'set_variable': {
            const user = userStore.getUser(pageId, senderId);

            if (!user) {
                console.log('User not found in set variable');
                endFlowHandller(pageId, senderId);
                return;
            }
            user.variables[payload.fields.key] = payload.fields.value;
            console.log(`[Set Variable] ${payload.fields.key} = ${payload.fields.value}`);
            if (payload.fields.next) runFlow(payload.fields.next, senderId, pageId);
            break;
        }
    }
}
