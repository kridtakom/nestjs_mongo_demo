import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { User, UserDocument } from "../schema/user.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findById(userId: String): Promise<User> {
        return this.userModel.findOne({ userId });
    }

    async findByUser(user: User): Promise<User> {
        return this.userModel.findOne(user)
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find({}).populate('pets');
    }

    async create(userId: String, email: String, age: Number): Promise<User> {
        const newUser = new this.userModel({ userId, email, age });
        return newUser.save()
    }

    async update(userId: String, user: Partial<User>): Promise<User> {
        return this.userModel.findOneAndUpdate({ userId }, user, { new: true });
    }

    async delete(userId: String): Promise<User> {
        return this.userModel.findOneAndDelete({ userId })
    }
}