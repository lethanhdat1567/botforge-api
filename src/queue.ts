import 'dotenv/config';

import { queue } from '~/constants/queue';
import { emailService } from '~/services/email.service';
import { queueService } from '~/services/queue.service';
import { VerifyEmailPayload } from '~/types/queue.type';
import { sleep } from '~/utils/time';

(async () => {
    while (true) {
        const queueJob = await queueService.findOnePending();

        if (queueJob) {
            const { id, type } = queueJob;

            await queueService.updateStatus(queueJob.id, 'processing');
            console.log(`Queue Job: processing job ${type}`);

            try {
                switch (type) {
                    case queue.verifyEmail: {
                        const payload = queueJob.payload as any as VerifyEmailPayload;

                        await emailService.sendVerifyEmail(payload?.user, payload?.token);
                        break;
                    }
                }

                await queueService.updateStatus(id, 'completed');
                console.log(`Queue Job: done job ${type}`);
            } catch (error) {
                console.log(`Queue Job: error job ${type}`, error);
                await queueService.updateStatus(id, 'error');
            }
        }

        await sleep(4, 's');
    }
})();
