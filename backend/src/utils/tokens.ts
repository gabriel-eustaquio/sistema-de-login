import jsonwebtoken from 'jsonwebtoken';
import { WithId, Document } from 'mongodb';

export function jsonWebToken(user: WithId<Document>[]) {
  const privateKey = `${process.env.KEY_JWT}`
  return jsonwebtoken.sign(user[0], privateKey, { expiresIn: 300})
}

export function refreshJsonWebToken(user: WithId<Document>[]) {
  const privateKey = `${process.env.KEY_JWT}`
  return jsonwebtoken.sign(user[0], privateKey, { expiresIn: '1d'})
}

export function resetPasswordJsonWebToken(user: WithId<Document>[]) {
  const privateKey = `${process.env.KEY_JWT}`
  return jsonwebtoken.sign(user[0], privateKey, { expiresIn: '2d'})
}

