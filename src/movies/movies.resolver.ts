import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Movie, MovieCreateInput } from '../@generated/movie';
import { MoviesService } from './services/movies.service';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  createMovie(@Args('data') data: MovieCreateInput) {
    return this.moviesService.createOne(data);
  }

  @Query(() => [Movie], { name: 'movies' })
  getMovies() {
    return this.moviesService.getMany();
  }
}
