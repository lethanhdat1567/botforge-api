// import { runFlow } from '~/core/engine/engine';
// import { ActionNode } from '~/core/engine/types/action';

// export async function handleActionNode(node: ActionNode) {
//     const payload = node.payload;

//     let valueToCheck: any;

//     switch (payload.type) {
//         case 'condition': {
//             const items = payload.fields.items;
//             let matched = false;

//             for (const item of items) {
//                 const isAllTrue = item.conditions.every((cond) => {
//                     valueToCheck = cond.field.startsWith('variables.')
//                         ? context.variables[cond.field.replace('variables.', '')]
//                         : cond.field;

//                     switch (cond.operator) {
//                         case 'equals':
//                             return valueToCheck === cond.value;
//                         case 'not_equals':
//                             return valueToCheck !== cond.value;
//                         case 'contains':
//                             return typeof valueToCheck === 'string' && valueToCheck.includes(cond.value);
//                         case 'regex':
//                             return new RegExp(cond.value).test(valueToCheck);
//                     }
//                 });

//                 if (isAllTrue) {
//                     matched = true;
//                     runFlow(item.next);
//                     break;
//                 }
//             }

//             if (!matched && payload.fields.defaultNext) {
//                 runFlow(payload.fields.defaultNext);
//             }
//             break;
//         }

//         case 'delay': {
//             await new Promise((res) => setTimeout(res, payload.fields.duration));
//             if (payload.fields.next) runFlow(payload.fields.next);
//             break;
//         }

//         case 'set_variable': {
//             context.variables[payload.fields.key] = payload.fields.value;
//             console.log(`[Set Variable] ${payload.fields.key} = ${payload.fields.value}`);
//             if (payload.fields.next) runFlow(payload.fields.next);
//             break;
//         }
//     }
// }
