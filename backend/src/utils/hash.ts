import bcrypt from 'bcrypt';
import { User, LoginUser } from '../types/user';
import { findUserByEmail } from '../database/user';

export async function hash(user: User) {
  return await bcrypt.hash(user.password, 10);
}

export async function hashCompare(user: LoginUser) {
  const userExists = await findUserByEmail(user.email);
  if (userExists.length) {
    return await bcrypt.compare(user.password, userExists[0].password);
  } else {
    return false
  }
}

export async function newPasswordHash(password: string) {
  return await bcrypt.hash(password, 10);
}