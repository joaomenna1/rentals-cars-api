import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const specificationsUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationsController = new CreateSpecificationsController(specificationsUseCase);

export { createSpecificationsController };