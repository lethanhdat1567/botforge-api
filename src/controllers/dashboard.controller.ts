import { Request, Response } from 'express';
import dashboardModel from '~/models/dashboard.model';
import dayjs from 'dayjs';

class DashboardController {
    async overview(req: Request, res: Response) {
        try {
            const ownerUserId = (req as any).user.userId;
            const { from, to } = req.query;

            let dateRange: { start: Date; end: Date } | undefined;

            if (from && to) {
                if (!dayjs(from as string).isValid() || !dayjs(to as string).isValid()) {
                    return (res as any).error({ message: 'Invalid date range' }, 400);
                }

                dateRange = {
                    start: dayjs(from as string)
                        .startOf('day')
                        .toDate(),
                    end: dayjs(to as string)
                        .endOf('day')
                        .toDate()
                };
            }

            const data = await dashboardModel.getOverview(ownerUserId, dateRange);

            return (res as any).success({
                message: 'Dashboard overview fetched',
                data
            });
        } catch (error) {
            console.error('Dashboard overview error:', error);
            return (res as any).error({ message: 'Failed to fetch dashboard overview' }, 500);
        }
    }

    async conversationChart(req: Request, res: Response) {
        try {
            const ownerUserId = (req as any).user.userId;
            const { from, to } = req.query;

            if (!from || !to) {
                return (res as any).error({ message: 'from & to are required' }, 400);
            }

            if (!dayjs(from as string).isValid() || !dayjs(to as string).isValid()) {
                return (res as any).error({ message: 'Invalid date range' }, 400);
            }

            const range = {
                start: dayjs(from as string)
                    .startOf('day')
                    .toDate(),
                end: dayjs(to as string)
                    .endOf('day')
                    .toDate()
            };

            const series = await dashboardModel.getConversationChart(ownerUserId, range);

            return (res as any).success({
                data: {
                    from,
                    to,
                    series
                }
            });
        } catch (error) {
            console.error('Conversation chart error:', error);
            return (res as any).error({ message: 'Failed to fetch conversation chart' }, 500);
        }
    }
}

export default new DashboardController();
