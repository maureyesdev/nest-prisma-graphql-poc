import { Injectable } from '@nestjs/common';
import {
  MovieCreateInput,
  MovieUpdateInput,
  MovieWhereUniqueInput,
} from '../../@generated/movie';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(data: MovieCreateInput) {
    return await this.prisma.movie.create({ data });
  }

  async getMany() {
    return await this.prisma.movie.findMany();
  }

  async updateOne(where: MovieWhereUniqueInput, data: MovieUpdateInput) {
    return this.prisma.movie.update({ data, where });
  }

  async deleteOne(where: MovieWhereUniqueInput) {
    return this.prisma.movie.delete({ where });
  }
}
