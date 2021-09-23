import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/usesCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/usesCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/usesCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryControlller = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryControlller.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };

/**
 * SRP - rota
 * receber a requisição, processa e retorna
 */
