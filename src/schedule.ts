import 'dotenv/config';
import { CronJob } from 'cron';
import backupDB from '~/schedules/backupDB';
import clearTrashFile from '~/schedules/clearTrashFile';

new CronJob(
    '*/1 * * * *',
    function () {
        console.log('Backup DB');
        backupDB();
    },
    null,
    true,
    'Asia/Ho_Chi_Minh'
);

new CronJob(
    '*/10 * * * * *',
    function () {
        console.log('Clear Trash File');
        clearTrashFile();
    },
    null,
    true,
    'Asia/Ho_Chi_Minh'
);
