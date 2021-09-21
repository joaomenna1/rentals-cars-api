import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/usesCases/createCategory";
import { importCategoryControlller } from "../modules/cars/usesCases/importCategory";
import { listCategoriesController } from "../modules/cars/usesCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryControlller.handle(request, response);
});

export { categoriesRoutes };

/**
 * SRP - rota
 * receber a requisição, processa e retorna
 */
