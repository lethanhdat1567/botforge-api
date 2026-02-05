import { Request, Response } from 'express';
import adminDashboardModel from '~/models/admin-dashboard.model';
import dayjs from 'dayjs';

class AdminDashboardController {
    private parseRange(query: any) {
        const { from, to } = query;

        if (!from || !to) return null;
        if (!dayjs(from).isValid() || !dayjs(to).isValid()) return null;

        return {
            start: dayjs(from).startOf('day').toDate(),
            end: dayjs(to).endOf('day').toDate()
        };
    }

    overview = async (req: Request, res: Response) => {
        try {
            const range = this.parseRange(req.query);
            const data = await adminDashboardModel.getOverview(range ?? undefined);

            return (res as any).success({
                message: 'Admin dashboard overview fetched',
                data
            });
        } catch (e) {
            console.error('Admin overview error:', e);
            return (res as any).error({ message: 'Failed to fetch admin overview' }, 500);
        }
    };

    chart = async (req: Request, res: Response) => {
        try {
            const range = this.parseRange(req.query);
            if (!range) {
                return (res as any).error({ message: 'Invalid date range' }, 400);
            }

            const series = await adminDashboardModel.getChart(range);

            return (res as any).success({
                data: {
                    from: req.query.from,
                    to: req.query.to,
                    series
                }
            });
        } catch (e) {
            console.error('Admin chart error:', e);
            return (res as any).error({ message: 'Failed to fetch admin chart' }, 500);
        }
    };
}

export default new AdminDashboardController();
