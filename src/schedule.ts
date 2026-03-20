import 'dotenv/config';
import { CronJob } from 'cron';
import backupDB from '~/schedules/backupDB';

new CronJob(
    '*/10 * * * * *',
    function () {
        backupDB();
    },
    null,
    true
);
