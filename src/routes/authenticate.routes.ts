import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCase/authenticaterUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateController.handle);

export { authenticateRoutes };
