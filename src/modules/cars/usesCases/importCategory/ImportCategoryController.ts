import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;
    if (file) {
      this.importCategoryUseCase.execute(file);
      return response.status(201).send();
    }

    return response.status(401).send();
  }
}

export { ImportCategoryController };
