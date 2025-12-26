import userStore from '~/core/store/userStore';

function endFlowHandller(pageId: string, senderId: string) {
    const user = userStore.getUser(pageId, senderId);

    console.log('PendingValue: ', user?.getPendingVariable());
    console.log('Variables:', user?.variables);
    console.log('----------End node----------');
    userStore.remove(pageId, senderId);
    console.log(userStore.getAll());
}

export default endFlowHandller;
