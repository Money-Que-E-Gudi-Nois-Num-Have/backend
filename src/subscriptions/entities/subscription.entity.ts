import { Member } from './member.entity';

export class Subscription {
  public readonly id: string;

  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly totalValue: number,
    public readonly members: Member[],
  ) {
    const hasOwner = members.some((member) => member.isOwner);

    if (!hasOwner) {
      throw new Error('Subscription must have at least one owner');
    }

    if (totalValue <= 0) {
      throw new Error('Total value must be greater than 0');
    }
  }
}
