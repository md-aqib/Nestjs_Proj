import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropertyService } from './property.service';
import { Property } from './schemas/property.schema';
export declare class PropertyController {
    private propertyService;
    constructor(propertyService: PropertyService);
    getAllProperties(): Promise<Property[]>;
    findOne(id: String): String;
    createProperty(property: CreatePropertyDto): Promise<Property>;
}
