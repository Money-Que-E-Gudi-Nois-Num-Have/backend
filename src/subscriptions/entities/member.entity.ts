import { Person } from '../../person/entities/person.entity';

export class Member {
  public readonly paid: null | boolean;

  constructor(
    public readonly isOwner: boolean,
    public readonly share: number,
    public readonly person: Person,
  ) {
    if (isOwner) {
      this.share = 0;
      this.paid = null;
    } else {
      this.paid = false;
    }
  }
}
