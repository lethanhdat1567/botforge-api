import { prisma } from '~/config/prisma';
import dayjs from 'dayjs';

class DashboardService {
    async getUserStats(userId: string, from?: string, to?: string) {
        // 1. Determine date range
        const endDate = to ? dayjs(to).endOf('day').toDate() : dayjs().endOf('day').toDate();
        const startDate = from ? dayjs(from).startOf('day').toDate() : dayjs().subtract(30, 'day').startOf('day').toDate();

        // 2. Summary Statistics within range
        // Note: flowsCount and sharesCount are total by default, but let's count within range for records.
        const [flowsCount, recordsCount, sharesCount] = await Promise.all([
            prisma.flow.count({ where: { userId } }),
            prisma.flowRecord.count({
                where: {
                    flow: { userId },
                    lastInteraction: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            }),
            prisma.flowShare.count({ where: { userId } })
        ]);

        // 3. Chart Data: Flow executions over the selected range
        const records = await prisma.flowRecord.findMany({
            where: {
                flow: { userId },
                lastInteraction: {
                    gte: startDate,
                    lte: endDate
                }
            },
            select: {
                lastInteraction: true
            }
        });

        // Group by day
        const chartDataMap: Record<string, number> = {};
        
        // Calculate number of days between startDate and endDate
        const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day');
        
        // Initialize range with 0
        for (let i = 0; i <= diffDays; i++) {
            const date = dayjs(startDate).add(i, 'day').format('DD/MM');
            chartDataMap[date] = 0;
        }

        records.forEach((record) => {
            const date = dayjs(record.lastInteraction).format('DD/MM');
            if (chartDataMap[date] !== undefined) {
                chartDataMap[date]++;
            }
        });

        const chartData = Object.entries(chartDataMap).map(([day, count]) => ({
            day,
            executions: count
        }));

        return {
            summary: {
                flowsCount,
                recordsCount,
                sharesCount,
                executionsCount: recordsCount
            },
            chartData
        };
    }

    async getAdminStats(from?: string, to?: string) {
        // 1. Determine date range
        const endDate = to ? dayjs(to).endOf('day').toDate() : dayjs().endOf('day').toDate();
        const startDate = from ? dayjs(from).startOf('day').toDate() : dayjs().subtract(6, 'day').startOf('day').toDate();

        // 2. Summary Statistics (Totals - still total count of all time)
        const [usersCount, sharedFlowsCount, postsCount] = await Promise.all([
            prisma.user.count(),
            prisma.flowShare.count(),
            prisma.posts.count()
        ]);

        // 3. Chart Data: Growth of these 3 metrics over the selected range
        const [newUsers, newSharedFlows, newPosts] = await Promise.all([
            prisma.user.findMany({
                where: { createdAt: { gte: startDate, lte: endDate } },
                select: { createdAt: true }
            }),
            prisma.flowShare.findMany({
                where: { createdAt: { gte: startDate, lte: endDate } },
                select: { createdAt: true }
            }),
            prisma.posts.findMany({
                where: { createdAt: { gte: startDate, lte: endDate } },
                select: { createdAt: true }
            })
        ]);

        // Initialize range with 0
        const chartDataMap: Record<string, { users: number; sharedFlows: number; posts: number }> = {};
        const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day');

        for (let i = 0; i <= diffDays; i++) {
            const date = dayjs(startDate).add(i, 'day').format('DD/MM');
            chartDataMap[date] = { users: 0, sharedFlows: 0, posts: 0 };
        }

        // Aggregate data
        newUsers.forEach((u) => {
            const date = dayjs(u.createdAt).format('DD/MM');
            if (chartDataMap[date]) chartDataMap[date].users++;
        });
        newSharedFlows.forEach((sf) => {
            const date = dayjs(sf.createdAt).format('DD/MM');
            if (chartDataMap[date]) chartDataMap[date].sharedFlows++;
        });
        newPosts.forEach((p) => {
            const date = dayjs(p.createdAt).format('DD/MM');
            if (chartDataMap[date]) chartDataMap[date].posts++;
        });

        const chartData = Object.entries(chartDataMap).map(([day, counts]) => ({
            day,
            ...counts
        }));

        return {
            summary: {
                usersCount,
                sharedFlowsCount,
                postsCount
            },
            chartData
        };
    }
}

export default new DashboardService();
