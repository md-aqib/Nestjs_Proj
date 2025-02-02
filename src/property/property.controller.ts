import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe, BadRequestException, UseGuards, Req } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropResponseDto } from './dto/propResponse.dto';
import { AuthGuard } from '../auth/auth.guard';
import { PropertyService } from './property.service';
import { Property } from './schemas/property.schema';

@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService) {}

    @Get()
    @UseGuards(AuthGuard)
    async getAllProperties(@Req() req): Promise<PropResponseDto> {
      try {
        const data = await this.propertyService.findAll({ email: req.user.email });
        if(!data.length) {
          throw new Error('Data not found');
        }
        return {
          status: true,
          message: "Data found successfully",
          data
        }
      } catch(error) {
        return {
          status: false,
          message: error.mmessage
        }
      }
    }

    @Get(':propertyName')
    @UseGuards(AuthGuard)
    async getProperty(@Param('propertyName') propertyName: String, @Req() req): Promise<PropResponseDto> {
      try {
        const data = await this.propertyService.findOne({ name: propertyName });
        if(!data) {
          throw new Error('Data not found');
        }
        return {
          status: true,
          message: "Data found successfully",
          data
        }
      } catch(error) {
        return {
          status: false,
          message: error.mmessage
        }
      }
    }

    // @Get(':id')
    // findOne(@Param('id') id: String) {
    //     return id
    // }

    //@Post()
    //@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) body: CreatePropertyDto) {
    //     return body;
    // }
    // create(@Body() body: CreatePropertyDto) {
    //     return body;
    // }
    @Post()
    @UseGuards(AuthGuard)
    async createProperty(@Body() property: CreatePropertyDto, @Req() req): Promise<PropResponseDto> {
      try {
        const { userId, email } = req.user;
        const existingProperty = await this.propertyService.findOne({ name: property.name });
        if (existingProperty) {
            throw new BadRequestException('Property with this name already exists.');
        };
        const newProperty = {
          ...property,
          userId,
          email
        };
        console.log({newProperty})
        const data = await this.propertyService.create(newProperty);
        return {
          status: true,
          message: "Created successfully!",
          data
        }
      } catch(error) {
        return {
          status: false,
          message: error.message
        }
      }
    }
}
