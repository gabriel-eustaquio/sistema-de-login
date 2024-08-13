import { Request, Response } from 'express';
import LoginUserUseCase from '../useCases/LoginUserUseCase';


export default class LoginUserController {
  async handle(request: Request, response: Response) {
    const loginUser = request.body;

    const loginUserUseCase = new LoginUserUseCase();
    const logged = await loginUserUseCase.execute(loginUser);
    
    if (logged) {
      response.send(logged)
    } else {
      response.send("Email ou senha invalida")
    }
  }
}