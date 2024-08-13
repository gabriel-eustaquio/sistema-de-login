import { insertTokens } from "../database/tokens";
import { findUserByEmail } from "../database/user";
import { LoginUser, User } from "../types/user";
import { hashCompare } from "../utils/hash";
import { jsonWebToken, refreshJsonWebToken } from "../utils/tokens";

export default class LoginUserUseCase {
  async execute(loginUser: LoginUser) {
    const auth = await hashCompare(loginUser);
    if (auth) {
      const user = await findUserByEmail(loginUser.email);
      const token = jsonWebToken(user); 
      const refreshToken = refreshJsonWebToken(user); 
      insertTokens({
        _id_user: user[0]._id,
        token,
        refreshToken,
      });   
      return {
        token,
        refreshToken
      };
    } else {
      return false;
    }
  }
}