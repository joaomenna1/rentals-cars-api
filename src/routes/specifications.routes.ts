import { application, Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationsController } from "../modules/cars/usesCases/createEspecifications/CreateSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  createSpecificationsController.handle
);

export { specificationsRoutes };
