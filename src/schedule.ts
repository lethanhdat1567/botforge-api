import 'dotenv/config';
import { CronJob } from 'cron';
import backupDB from '~/schedules/backupDB';
import clearTrashFile from '~/schedules/clearTrashFile';

new CronJob(
    '0 3 * * *',
    function () {
        backupDB();
    },
    null,
    true
);

new CronJob(
    '0 4 * * *',
    function () {
        clearTrashFile();
    },
    null,
    true
);
