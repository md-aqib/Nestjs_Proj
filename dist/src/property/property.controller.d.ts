import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropResponseDto } from './dto/propResponse.dto';
import { PropertyService } from './property.service';
export declare class PropertyController {
    private propertyService;
    constructor(propertyService: PropertyService);
    getAllProperties(req: any): Promise<PropResponseDto>;
    getProperty(propertyName: String, req: any): Promise<PropResponseDto>;
    createProperty(property: CreatePropertyDto, req: any): Promise<PropResponseDto>;
}
