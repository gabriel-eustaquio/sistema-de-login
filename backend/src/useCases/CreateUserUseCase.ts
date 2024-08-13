import { insertUser } from '../database/user';
import { User } from '../types/user';

export default class CreateUserUseCase {
  execute(user: User) {
    return insertUser(user);
  }
}