import { Category } from '../schemas/property.schema';
export declare class CreatePropertyDto {
    readonly name: string;
    readonly description: string;
    readonly area: number;
    readonly price: number;
    readonly category: Category;
}