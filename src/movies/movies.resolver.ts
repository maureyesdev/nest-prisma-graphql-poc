import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './models/movie.model';
import { CreateMovieInput } from './dto/create-movie.input';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  createMovie(@Args('data') data: CreateMovieInput) {
    return this.moviesService.createOne(data);
  }

  @Query(() => [Movie], { name: 'movies' })
  getMovies() {
    return this.moviesService.getMany();
  }
}
