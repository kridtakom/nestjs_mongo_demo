import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePetDto } from "../dto/create-pet.dto";
import { Pet, PetDocument } from '../schema/pet.schema'
import { User, UserDocument } from "../schema/user.schema";

@Injectable()
export class PetsRepository {
    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>,  @InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findById(petId: String): Promise<Pet> {
        return this.petModel.findById(petId);
    }

    async findAll(): Promise<Pet[]> {
        return this.petModel.find({});
    }

    async create(createPetDto: CreatePetDto): Promise<Pet> {
        const newPet = new this.petModel(createPetDto);
        await newPet.save()
        await this.userModel.findByIdAndUpdate(createPetDto.user, { $push: { pets: newPet } })
        return newPet
    }

    async update(petId: String, pet: Partial<Pet>): Promise<Pet> {
        return this.petModel.findOneAndUpdate({ _id: petId }, pet, { new: true });
    }

    async delete(petId: String): Promise<Pet> {
        return this.petModel.findOneAndDelete({ _id: petId })
    }
}