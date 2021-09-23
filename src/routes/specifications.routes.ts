import { Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/usesCases/createEspecifications/CreateSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post("/", createSpecificationsController.handle);

export { specificationsRoutes };
