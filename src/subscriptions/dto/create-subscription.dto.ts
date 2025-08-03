import { Person } from '../../person/entities/person.entity';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSubscriptionDto {
  @IsNotEmpty({ message: 'Owner is required' })
  @ValidateNested()
  @Type(() => Person)
  public readonly owner: Person;

  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  public readonly name: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  public readonly description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Total value is required' })
  @Min(0, { message: 'Total value must be greater than or equal to 0' })
  public readonly totalValue: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Person)
  @IsNotEmpty({ message: 'Members are required' })
  public readonly members: Person[];
}
