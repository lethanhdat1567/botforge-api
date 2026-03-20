import cleanTrashService from '~/services/clean-trash.service';

async function clearTrashFile() {
    await cleanTrashService.handleClean();
}

export default clearTrashFile;
