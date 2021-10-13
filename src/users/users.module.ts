import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/user.schema";
import { UsersController } from "./controller/users.controller";
import { UsersRepository } from "./repository/users.repository";
import { UsersService } from "./service/users.service";
import { Pet, PetSchema } from "./schema/pet.schema";
import { PetsService } from "./service/pets.service";
import { PetsRepository } from "./repository/pets.repository";
import { PetController } from "./controller/pets.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])
    ],
    controllers: [UsersController, PetController],
    providers: [UsersService, UsersRepository, PetsService, PetsRepository]
})

export class UserModule { }
