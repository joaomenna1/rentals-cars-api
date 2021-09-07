import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
    name: string,
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepositoy: CategoriesRepository) {} 

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepositoy.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exist")
        }
    
        this.categoriesRepositoy.create({ name, description })
    }
}

export { CreateCategoryUseCase }