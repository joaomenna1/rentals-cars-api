import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepositoy: CategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepositoy.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exist");
    }

    await this.categoriesRepositoy.create({ name, description });
  }
}

export { CreateCategoryUseCase };
