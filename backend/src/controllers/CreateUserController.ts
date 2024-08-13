import { Request, Response } from 'express';
import CreateUserUseCase from '../useCases/CreateUserUseCase';
import { User } from '../types/user';

export default class CreateUserController {
   async handle(request: Request, response: Response) {
    const user: User = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute(user);

    if (result) {
      response.send("Usuario criado com sucesso no banco de dados.")
    } else {
      response.send("Usuario já cadastrado")
    }
  }
}