import { MongoClient, ObjectId } from 'mongodb';
import { Token } from '../types/tokens';

let connection: MongoClient;

async function connect() {
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url);
  connection = await client.connect();
}

connect();

export async function insertTokens(token: Token) {
  const tokenExists = await findTokens(token._id_user);
  if (!tokenExists.length) {
    return await connection.db("sistema-de-login").collection("tokens").insertOne(token);
  } else {
    return await updateTokens(token);
  }
}

export async function updateTokens(token: Token) {
  return await connection.db("sistema-de-login").collection("tokens").updateOne({_id_user: token._id_user}, {$set: {token: token.token, refreshToken: token.refreshToken, resetPasswordToken: token.resetPasswordToken}})
}

export async function findTokens(_id_user: ObjectId) {
  return await connection.db("sistema-de-login").collection("tokens").find({_id_user: _id_user}).toArray()
}