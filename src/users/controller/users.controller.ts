import { Controller, Param, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../schema/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get(':userId')
    async getUser(@Param('userId') userId: String): Promise<User> {
        return this.userService.getUserById(userId)
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers()
    }

    @Post()
    async creteUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto.email, createUserDto.age)
    }

    @Patch(':userId')
    async updateUser(@Param('userId') userId: String, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.updateUser(userId, updateUserDto)
    }

    @Delete(':userId')
    async deleteUser(@Param('userId') userId: String){
        return this.userService.deleteUser(userId)
    }
}