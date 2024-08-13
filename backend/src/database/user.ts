import { MongoClient } from 'mongodb';
import { User } from '../types/user';
import { hash } from '../utils/hash';

let connection: MongoClient;

async function connect() {
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url);
  connection = await client.connect();
}

connect();

export async function insertUser(user: User) {
  const users = await findUserByEmail(user.email);
  if (!users.length) {
    const hashPassword = await hash(user);
    return await connection.db("sistema-de-login").collection("users").insertOne({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashPassword,
    });
  } else {
    return false;
  }
}

export async function findUserByEmail(email: string) {
  return await connection.db("sistema-de-login").collection("users").find({email: email}).toArray();
}

export async function updatePassword(email: string, newPassword: string) {
  return await connection.db("sistema-de-login").collection("users").updateOne({email: email}, {$set: {password: newPassword}})
}