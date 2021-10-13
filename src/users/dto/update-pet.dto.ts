import { IsEmpty } from "class-validator"
import { User } from "../schema/user.schema"

export class UpdatePetDto {
    @IsEmpty()
    name: string

    @IsEmpty()
    user: User
}