import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  firstname: string;

  @prop()
  lastname: string;

  @prop()
  password: string;

  @prop()
  email: string;

  @prop({ default: () => new Date() })
  createdAt: Date;

  @prop({ default: () => new Date() })
  updatedAt: Date;

  @prop({ default: () => new Date() })
  deletedAt: Date;

  @prop({ default: () => new Date() })
  lastConnection: boolean;
}