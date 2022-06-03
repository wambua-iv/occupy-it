import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertiesDocument = Properties & Document;

@Schema({ timestamps: true })
export class Properties {
  @Prop({ required: true })
  type: string;
}

export const PropertiesSchema = SchemaFactory.createForClass(Properties);
