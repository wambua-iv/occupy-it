import { Properties, PropertiesDocument } from '@/models/properties.models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyTypeDto } from './dto';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Properties.name) private Property: Model<PropertiesDocument>) {}

  async getPropertiesByType(dto: PropertyTypeDto) {
    return await this.Property.aggregate([{ $match: { type: dto.type } }, { $project: { type: 1 } }]);
  }
}
