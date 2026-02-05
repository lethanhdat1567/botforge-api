import { prisma } from '~/config/prisma';
import dayjs from 'dayjs';

class DashboardModel {
    private getMonthRange(offset = 0) {
        return {
            start: dayjs().add(offset, 'month').startOf('month').toDate(),
            end: dayjs().add(offset, 'month').endOf('month').toDate()
        };
    }

    private calcCompare(current: number, prev: number) {
        if (prev === 0) return current === 0 ? 0 : 100;
        return Math.round(((current - prev) / prev) * 100);
    }

    private calcRate = (completed: number, total: number) => (total === 0 ? 0 : Math.round((completed / total) * 100));

    async getOverview(ownerUserId: string, range?: { start: Date; end: Date }) {
        const currentRange = range ?? this.getMonthRange(0);
        const prevRange = range
            ? {
                  start: dayjs(range.start).subtract(1, 'month').toDate(),
                  end: dayjs(range.end).subtract(1, 'month').toDate()
              }
            : this.getMonthRange(-1);

        const currentTimeFilter = {
            gte: currentRange.start,
            lte: currentRange.end
        };

        const prevTimeFilter = {
            gte: prevRange.start,
            lte: prevRange.end
        };

        /** =====================
         * 1. Active Bots
         ====================== */
        const [botCurrent, botPrev] = await Promise.all([
            prisma.page.count({
                where: {
                    userId: ownerUserId,
                    status: 'active',
                    createdAt: currentTimeFilter
                }
            }),
            prisma.page.count({
                where: {
                    userId: ownerUserId,
                    status: 'active',
                    createdAt: prevTimeFilter
                }
            })
        ]);

        /** =====================
         * 2. Conversations
         ====================== */
        const [conversationCurrent, conversationPrev] = await Promise.all([
            prisma.userFlowState.count({
                where: {
                    ownerUserId,
                    createdAt: currentTimeFilter
                }
            }),
            prisma.userFlowState.count({
                where: {
                    ownerUserId,
                    createdAt: prevTimeFilter
                }
            })
        ]);

        /** =====================
			 * 3. Success rate
			 ====================== */
        const [completedCurrent, completedPrev] = await Promise.all([
            prisma.userFlowState.count({
                where: {
                    ownerUserId,
                    status: 'completed',
                    createdAt: currentTimeFilter
                }
            }),
            prisma.userFlowState.count({
                where: {
                    ownerUserId,
                    status: 'completed',
                    createdAt: prevTimeFilter
                }
            })
        ]);

        const successRateCurrent = this.calcRate(completedCurrent, conversationCurrent);
        const successRatePrev = this.calcRate(completedPrev, conversationPrev);

        const successRateCompare = successRateCurrent - successRatePrev;

        /** =====================
         * 4. Shared Templates
         ====================== */
        const [templateCurrent, templatePrev] = await Promise.all([
            prisma.flowShare.count({
                where: {
                    userId: ownerUserId,
                    createdAt: currentTimeFilter
                }
            }),
            prisma.flowShare.count({
                where: {
                    userId: ownerUserId,
                    createdAt: prevTimeFilter
                }
            })
        ]);

        return {
            pages: {
                active: botCurrent,
                comparePercent: this.calcCompare(botCurrent, botPrev)
            },
            conversations: {
                value: conversationCurrent,
                comparePercent: this.calcCompare(conversationCurrent, conversationPrev)
            },
            flowTriggerRate: {
                value: successRateCurrent,
                comparePercent: successRateCompare
            },
            sharedTemplates: {
                value: templateCurrent,
                comparePercent: this.calcCompare(templateCurrent, templatePrev)
            }
        };
    }

    async getConversationChart(ownerUserId: string, range: { start: Date; end: Date }) {
        const rows = await prisma.userFlowState.findMany({
            where: {
                ownerUserId,
                createdAt: {
                    gte: range.start,
                    lte: range.end
                }
            },
            select: {
                status: true,
                createdAt: true
            }
        });

        // Group by date
        const map: Record<string, { date: string; total: number; completed: number }> = {};

        rows.forEach((row) => {
            const date = dayjs(row.createdAt).format('YYYY-MM-DD');

            if (!map[date]) {
                map[date] = {
                    date,
                    total: 0,
                    completed: 0
                };
            }

            map[date].total += 1;
            if (row.status === 'completed') {
                map[date].completed += 1;
            }
        });

        // Fill missing days
        const result = [];
        const days = dayjs(range.end).diff(dayjs(range.start), 'day') + 1;

        for (let i = 0; i < days; i++) {
            const date = dayjs(range.start).add(i, 'day').format('YYYY-MM-DD');

            result.push(
                map[date] ?? {
                    date,
                    total: 0,
                    completed: 0
                }
            );
        }

        return result;
    }
}

export default new DashboardModel();
