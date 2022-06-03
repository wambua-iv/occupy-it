import { Body, Controller, Get } from '@nestjs/common';
import { PropertyTypeDto } from './dto';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get('type')
  getPropertiesByType(@Body() dto: PropertyTypeDto) {
    return this.propertiesService.getPropertiesByType(dto);
  }
}
