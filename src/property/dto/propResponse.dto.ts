import { Property } from '../schemas/property.schema';

export class PropResponseDto {
    status: boolean;
    message: string;
    data?: Property | Property[];
}