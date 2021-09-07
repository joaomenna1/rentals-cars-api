import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpeficifationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private spefications: Specification[];

    constructor() {
        this.spefications = []
    } 
    
    findByName(name: string): Specification | undefined {
        const spefication = this.spefications.find((specification) => specification.name === name);
        return spefication
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.spefications.push(specification)
    }

    
}

export { SpecificationsRepository }