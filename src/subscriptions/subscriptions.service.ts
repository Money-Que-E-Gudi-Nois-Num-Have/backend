import { Injectable } from '@nestjs/common';
import { Subscription } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class SubscriptionsService {
  public create(dto: CreateSubscriptionDto) {
    const people = [
      dto.owner,
      ...dto.members.filter((member) => member.id !== dto.owner.id),
    ];

    const share = dto.totalValue / people.length;

    const members = people.map((person) => {
      const isOwner = person.id === dto.owner.id;

      return new Member(isOwner, share, person);
    });

    return new Subscription(dto.name, dto.description, dto.totalValue, members);
  }
}
