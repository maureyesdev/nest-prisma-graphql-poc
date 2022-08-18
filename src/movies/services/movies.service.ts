import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(data: Prisma.MovieCreateInput) {
    return await this.prisma.movie.create({ data });
  }

  async getMany() {
    return await this.prisma.movie.findMany();
  }
}
