import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;
}
