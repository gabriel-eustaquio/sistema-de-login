import { findTokens, updateTokens } from "../database/tokens";
import { findUserByEmail } from "../database/user";
import sendMail from "../utils/mailtrap";
import { resetPasswordJsonWebToken } from "../utils/tokens";

export default class ForgotPasswordUserUseCase {
  async execute(email: string) {
    const user = await findUserByEmail(email);

    if (user.length) {
      const resetPasswordToken = resetPasswordJsonWebToken(user);
      const infoTokenOfTheUser = await findTokens(user[0]._id);
      await updateTokens({
        _id_user: infoTokenOfTheUser[0]._id_user,
        token: infoTokenOfTheUser[0].token,
        refreshToken: infoTokenOfTheUser[0].refreshToken,
        resetPasswordToken: resetPasswordToken
      })
      sendMail(user[0].email, resetPasswordToken);
      return true
    } else {
      return false;
    }
  }
}