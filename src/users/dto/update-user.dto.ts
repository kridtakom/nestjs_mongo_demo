import { IsEmail, IsEmpty, IsNotEmpty, IsNumber } from "class-validator"
import { Pet } from "../schema/pet.schema"

export class UpdateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsEmpty()
    pet: Pet[]
}