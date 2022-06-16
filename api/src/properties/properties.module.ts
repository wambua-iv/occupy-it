import { Payments, Properties } from '@/models';
import { PaymentSchema } from '@/models/payments.models';
import { PropertiesSchema } from '@/models/properties.models';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Properties.name, schema: PropertiesSchema }]),
    MongooseModule.forFeature([{ name: Payments.name, schema: PaymentSchema }]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
