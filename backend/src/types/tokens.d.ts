import { ObjectId } from "mongodb"

export type Token = {
  _id_user: ObjectId,
  token: string,
  refreshToken: string,
  resetPasswordToken?: string
}