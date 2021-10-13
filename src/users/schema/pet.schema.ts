import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as schema } from "mongoose";
import { User } from "./user.schema";

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop({ required: true })
    name: String

    @Prop({ required: true })
    type: String

    @Prop({ type: schema.Types.ObjectId, ref: 'User' })
    user: User
}
export const PetSchema = SchemaFactory.createForClass(Pet)