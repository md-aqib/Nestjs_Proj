import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertySchema, Property } from './schemas/property.schema';
import { PropertyService } from './property.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Property.name, schema: PropertySchema }])],
  controllers: [PropertyController],
  providers: [
    PropertyService,
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true,
    //     transformOptions: {
    //       enableImplicitConversion: true
    //     }
    //   })
    // }
  ]
})
export class PropertyModule {}
