export interface CRUDInterface {
    getAll($req: Request, $res: Response): Promise<void>;
    getOne($req: Request, $res: Response): Promise<void>;
    create($req: Request, $res: Response): Promise<void>;
    update($req: Request, $res: Response): Promise<void>;
    delete($req: Request, $res: Response): Promise<void>;
}

export abstract class CRUDController {
    public static getAll: CRUDInterface['getAll'];
    public static getOne: CRUDInterface['getOne'];
    public static create: CRUDInterface['create'];
    public static update: CRUDInterface['update'];
    public static delete: CRUDInterface['delete'];
}
