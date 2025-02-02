import { Property } from '../schemas/property.schema';
export declare class PropResponseDto {
    status: boolean;
    message: string;
    data?: Property | Property[];
}
