import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertiesDocument = Properties & Document;

@Schema({ timestamps: true })
export class Properties {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  price: string;

  @Prop({ type: Array, default: null })
  amenities: [];

  @Prop({ type: Array })
  tenants: [];
}

export const PropertiesSchema = SchemaFactory.createForClass(Properties);
