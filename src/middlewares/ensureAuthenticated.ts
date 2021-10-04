import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader!.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "cf9306294bbaef3053e8cbf5b96ab18a"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    usersRepository.findById(user_id);
  } catch {
    throw new Error("Invalid token!");
  }
}
