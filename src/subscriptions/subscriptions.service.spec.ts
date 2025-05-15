import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionsService } from './subscriptions.service';
import { Person } from '../person/entities/person.entity';
import { Subscription } from './entities/subscription.entity';

describe('SubscriptionsService', () => {
  let service: SubscriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionsService],
    }).compile();

    service = module.get<SubscriptionsService>(SubscriptionsService);
  });

  it('should create a new subscription', async () => {
    const owner = new Person('Luis Meirelles');

    const members = [
      new Person('Milene Giovana Souto Meirelles'),
      new Person('Luis Diego Souto'),
      new Person('Morgana Juver da Rosa'),
    ];

    const subscription = service.create({
      owner,
      name: 'Netflix',
      description: 'Netflix de pobre com anúncio',
      totalValue: 20,
      members,
    });

    const people = [owner, ...members];

    expect(subscription).toEqual(
      new Subscription('Netflix', 'Netflix de pobre com anúncio', 20, [
        ...people.map((person) => {
          const isOwner = person.id === owner.id;

          return {
            person,
            share: isOwner ? 0 : 5,
            paid: isOwner ? null : false,
            isOwner,
          };
        }),
      ]),
    );
  });
});
