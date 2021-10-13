import { IsNotEmpty } from "class-validator";
import { User } from "../schema/user.schema";

export class CreatePetDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    type: number

    user: User
}