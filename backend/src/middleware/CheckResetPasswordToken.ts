import { NextFunction, Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';

export default class CheckResetPasswordToken {
  handle(request: Request, response: Response, next: NextFunction) {
    const token = request.headers['x-access-token'];

    jsonwebtoken.verify(`${token}`, `${process.env.KEY_JWT}`, function (err, decoded) {
      if (err) return response.status(401).end();
      
      request.body.decoded = decoded;

      next()
    })


  }
}