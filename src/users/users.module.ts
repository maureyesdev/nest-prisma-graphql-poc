import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './services/users.service';
import { PrismaService } from '../prisma/services/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
