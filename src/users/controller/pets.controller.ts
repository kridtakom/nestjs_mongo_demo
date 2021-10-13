import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePetDto } from "../dto/create-pet.dto";
import { Pet } from "../schema/pet.schema";
import { PetsService } from "../service/pets.service";

@Controller('pets')
export class PetController {
    constructor(private readonly petSevice: PetsService) { }

    @Get(':petId')
    async getPet(@Param('petId') petId: String): Promise<Pet> {
        return this.petSevice.getPetById(petId)
    }

    @Get()
    async getAllPet(): Promise<Pet[]> {
        return this.petSevice.getPets()
    }

    @Post()
    async addPet(@Body() createPet: CreatePetDto): Promise<Pet> {
        return this.petSevice.createPet(createPet)
    }
}