import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  User,
  UserCreateInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../@generated/user';
import { UsersService } from './services/users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('data') data: UserCreateInput) {
    return this.usersService.createOne(data);
  }

  @Query(() => [User], { name: 'users' })
  getUsers() {
    return this.usersService.getMany();
  }

  @Query(() => User, { name: 'user' })
  getUser(@Args('id') { id }: UserWhereUniqueInput) {
    return this.usersService.getOne({ id });
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') { id }: UserWhereUniqueInput,
    @Args('data') data: UserUpdateInput,
  ) {
    return this.usersService.updateOne({ id }, data);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') { id }: UserWhereUniqueInput) {
    return this.usersService.deleteOne({ id });
  }
}
