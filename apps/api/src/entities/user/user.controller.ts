import { Request, Response } from 'express';
import { CRUDController } from '../../types';

export class UserController implements CRUDController {
    public static async getAll(req: Request, res: Response) {}

    public static async getOne(req: Request, res: Response) {}

    public static async create(req: Request, res: Response) {}

    public static async update(req: Request, res: Response) {}

    public static async delete(req: Request, res: Response) {}
}
