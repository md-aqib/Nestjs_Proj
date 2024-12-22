import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All prperties"
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return id
    }

    @Post()
    create() {
        return "created property"
    }
}
