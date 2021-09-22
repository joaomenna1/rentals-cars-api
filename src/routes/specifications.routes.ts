import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/usesCases/createEspecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
