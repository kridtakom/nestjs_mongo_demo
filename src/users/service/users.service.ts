import { Injectable } from "@nestjs/common";
import { User } from "../schema/user.schema";
import { Pet } from "../schema/pet.schema";
import { UsersRepository } from "../repository/users.repository";
import { v4 as uuidv4 } from "uuid";
import { UpdateUserDto } from "../dto/update-user.dto"

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UsersRepository) { }

    async getUserById(userId: String): Promise<User> {
        return this.userRepository.findById(userId)
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.findAll()
    }

    async createUser(email: String, age: number): Promise<User> {
        return this.userRepository.create(uuidv4(), email, age)
    }

    async updateUser(userId: String, userUpdates: UpdateUserDto): Promise<User> {
        return this.userRepository.update(userId, userUpdates)
    }

    async deleteUser(userId: String): Promise<User> {
        return this.userRepository.delete(userId)
    }
}