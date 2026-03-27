import dashboardService from '~/services/dashboard.service';

class DashboardController {
    async getUserStats(req: any, res: any) {
        const { from, to } = req.query;
        const stats = await dashboardService.getUserStats(req.user.id, from as string, to as string);
        return res.success(stats);
    }

    async getAdminStats(req: any, res: any) {
        const { from, to } = req.query;
        const stats = await dashboardService.getAdminStats(from as string, to as string);
        return res.success(stats);
    }
}

export default new DashboardController();
