import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "../dto/create-pet.dto";
import { UpdatePetDto } from "../dto/update-pet.dto";
import { PetsRepository } from "../repository/pets.repository";
import { Pet } from "../schema/pet.schema";


@Injectable()
export class PetsService {

    constructor(private readonly petsRepository: PetsRepository) { }

    async getPetById(petId: String): Promise<Pet> {
        return this.petsRepository.findById(petId)
    }

    async getPets(): Promise<Pet[]> {
        return this.petsRepository.findAll()
    }

    async createPet(createPetDto: CreatePetDto): Promise<Pet> {
        return this.petsRepository.create(createPetDto)
    }

    async updatePet(petId: String, updateUserDto: UpdatePetDto): Promise<Pet> {
        return this.petsRepository.update(petId, updateUserDto)
    }

    async deleteUser(userId: String): Promise<Pet> {
        return this.petsRepository.delete(userId)
    }
}