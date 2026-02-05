import { prisma } from '~/config/prisma';
import dayjs from 'dayjs';

class AdminDashboardModel {
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

    async getOverview(range?: { start: Date; end: Date }) {
        const current = range ?? this.getMonthRange(0);
        const prev = range
            ? {
                  start: dayjs(range.start).subtract(1, 'month').toDate(),
                  end: dayjs(range.end).subtract(1, 'month').toDate()
              }
            : this.getMonthRange(-1);

        const time = (r: any) => ({ gte: r.start, lte: r.end });

        const [usersCur, usersPrev, botsCur, botsPrev, convCur, convPrev, tplCur, tplPrev] = await Promise.all([
            prisma.user.count({ where: { createdAt: time(current) } }),
            prisma.user.count({ where: { createdAt: time(prev) } }),

            prisma.page.count({ where: { createdAt: time(current) } }),
            prisma.page.count({ where: { createdAt: time(prev) } }),

            prisma.userFlowState.count({ where: { createdAt: time(current) } }),
            prisma.userFlowState.count({ where: { createdAt: time(prev) } }),

            prisma.flowShare.count({ where: { createdAt: time(current) } }),
            prisma.flowShare.count({ where: { createdAt: time(prev) } })
        ]);

        return {
            users: {
                value: usersCur,
                comparePercent: this.calcCompare(usersCur, usersPrev)
            },
            bots: {
                value: botsCur,
                comparePercent: this.calcCompare(botsCur, botsPrev)
            },
            sharedTemplates: {
                value: tplCur,
                comparePercent: this.calcCompare(tplCur, tplPrev)
            },
            conversations: {
                value: convCur,
                comparePercent: this.calcCompare(convCur, convPrev)
            }
        };
    }

    async getChart(range: { start: Date; end: Date }) {
        const [users, conversations, templates] = await Promise.all([
            prisma.user.findMany({
                where: { createdAt: { gte: range.start, lte: range.end } },
                select: { createdAt: true }
            }),
            prisma.userFlowState.findMany({
                where: { createdAt: { gte: range.start, lte: range.end } },
                select: { createdAt: true }
            }),
            prisma.flowShare.findMany({
                where: { createdAt: { gte: range.start, lte: range.end } },
                select: { createdAt: true }
            })
        ]);

        const map: Record<string, { date: string; users: number; conversations: number; templates: number }> = {};

        const add = (date: string, key: keyof Omit<(typeof map)[string], 'date'>) => {
            if (!map[date]) {
                map[date] = { date, users: 0, conversations: 0, templates: 0 };
            }
            map[date][key] += 1;
        };

        users.forEach((u) => add(dayjs(u.createdAt).format('YYYY-MM-DD'), 'users'));
        conversations.forEach((c) => add(dayjs(c.createdAt).format('YYYY-MM-DD'), 'conversations'));
        templates.forEach((t) => add(dayjs(t.createdAt).format('YYYY-MM-DD'), 'templates'));

        const days = dayjs(range.end).diff(dayjs(range.start), 'day') + 1;
        const result = [];

        for (let i = 0; i < days; i++) {
            const date = dayjs(range.start).add(i, 'day').format('YYYY-MM-DD');
            result.push(
                map[date] ?? {
                    date,
                    users: 0,
                    conversations: 0,
                    templates: 0
                }
            );
        }

        return result;
    }
}

export default new AdminDashboardModel();
