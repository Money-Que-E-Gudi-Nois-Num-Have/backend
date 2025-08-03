import { Person } from '../../person/entities/person.entity';

export class Member {
  public readonly paid: null | boolean;

  constructor(
    public readonly isOwner: boolean,
    public readonly share: number,
    public readonly person: Person,
  ) {
    this.paid = isOwner ? null : false;
  }
}
