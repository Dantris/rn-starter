import type { Request, Response, NextFunction } from 'express';

class UserController {
    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ users: [] });
        } catch (err) { next(err); }
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email } = req.body;
            res.status(201).json({ user: { name, email } });
        } catch (err) { next(err); }
    }
}

export default new UserController();
