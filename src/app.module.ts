import { Module } from '@nestjs/common';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [SubscriptionsModule, PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
