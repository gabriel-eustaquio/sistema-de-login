import { Request, Response } from "express";
import ResetPasswordUserUseCase from "../useCases/ResetPasswordUserUseCase";

export default class ResetPasswordUserController {
  async handle(request: Request, response: Response) {
    const email = request.body.decoded.email;
    const password = request.body.newPassword;

    const resetPasswordUserUseCase = new ResetPasswordUserUseCase();
    const status = await resetPasswordUserUseCase.execute(email, password);

    if (status) {
      response.send("Senha alterada");
    } else {
      response.send("Ocorreu um erro inesperado")
    }

  }
}