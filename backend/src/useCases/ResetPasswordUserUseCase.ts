import { findUserByEmail, updatePassword } from "../database/user";
import { newPasswordHash } from "../utils/hash";

export default class ResetPasswordUserUseCase {
  async execute(email: string, password: string) {
    const user = await findUserByEmail(email);
    const newPassword = await newPasswordHash(password);

    const status = await updatePassword(email, newPassword);

    return status.modifiedCount;

  }
}