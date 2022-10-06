import { Injectable } from '@nestjs/common';
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '../../@generated/user';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(data: UserCreateInput) {
    return await this.prisma.user.create({ data });
  }

  async getMany() {
    return await this.prisma.user.findMany({});
  }

  async getOne(where: UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({ where });
  }

  async updateOne(where: UserWhereUniqueInput, data: UserUpdateInput) {
    return await this.prisma.user.update({ where, data });
  }

  async deleteOne(where: UserWhereUniqueInput) {
    return await this.prisma.user.delete({ where });
  }
}
