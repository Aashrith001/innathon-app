import { Controller, Get } from "@overnightjs/core";
import { getAllUsers } from "../services/user.service";
import { IUser } from "../models/user.model";

@Controller('users')
export class UserController {

    @Get('')
    async getSheetsData(req: Request, res: Response) {
        const data: IUser[] = await getAllUsers();
    }
}