import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, username, email, password, driver_licenses } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({
        name,
        username,
        email,
        password,
        driver_licenses,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(404).json({ error: "same errror" });
    }
  }
}

export { CreateUserController };
