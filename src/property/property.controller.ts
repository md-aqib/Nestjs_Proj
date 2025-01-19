import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

import { PropertyService } from './property.service';
import { Property } from './schemas/property.schema';

@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService) {}

    @Get()
    async getAllProperties(): Promise<Property[]> {
      return this.propertyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return id
    }

    //@Post()
    //@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) body: CreatePropertyDto) {
    //     return body;
    // }
    // create(@Body() body: CreatePropertyDto) {
    //     return body;
    // }
    @Post()
    async createProperty(@Body() property: CreatePropertyDto): Promise<Property> {
        console.log({property});
      return this.propertyService.create(property);
    }
}
