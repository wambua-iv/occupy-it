import { IsNotEmpty, IsString } from 'class-validator';

export class PropertyTypeDto {
  @IsNotEmpty()
  @IsString()
  type: string;
}
