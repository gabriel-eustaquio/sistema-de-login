import { Request, Response } from 'express';
import ForgotPasswordUserUseCase from '../useCases/ForgotPasswordUserUseCase';

export default class ForgotPasswordUserController {
  async handle(request: Request, response: Response) {
    const {email}: {email: string} = request.body;

    const forgotPasswordUserUseCase = new ForgotPasswordUserUseCase();
    const emailSentOrNo = await forgotPasswordUserUseCase.execute(email);

    if (emailSentOrNo) {
      response.send("Token enviado ao email para redefinir a senha.");
    } else {
      response.send("Não existe nenhuma conta com este email.")
    }
  }
}