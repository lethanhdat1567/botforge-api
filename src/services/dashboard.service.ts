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
}

export default new DashboardService();
