import { ObjectId } from "mongodb";

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserPayload {
  userId: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
