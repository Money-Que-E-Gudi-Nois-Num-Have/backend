import { Person } from '../../person/entities/person.entity';

export class CreateSubscriptionDto {
  public readonly owner: Person;
  public readonly name: string;
  public readonly description: string;
  public readonly totalValue: number;
  public readonly members: Person[];
}
