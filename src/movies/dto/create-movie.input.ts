import { InputType, Field } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class CreateMovieInput {
  @Field()
  title: string;
}
