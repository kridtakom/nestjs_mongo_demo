import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as schema } from "mongoose";
import { Pet } from "./pet.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    userId: String;

    @Prop({ required: true })
    email: String;

    @Prop({ required: true })
    age: Number;

    @Prop([{ type: schema.Types.ObjectId, ref: 'Pet' }])
    pets: Pet[];
}

export const UserSchema = SchemaFactory.createForClass(User)