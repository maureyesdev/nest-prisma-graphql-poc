import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from '../dto/create-movie.input';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [
    { id: 1, title: 'The Shaw shank Redemption' },
    { id: 2, title: 'The Godfather' },
    { id: 3, title: 'The Godfather: Part II' },
  ];

  async createOne(data: CreateMovieInput) {
    return await new Promise((resolve) => {
      const movie: Movie = {
        id: this.movies.length + 1,
        title: data.title,
      };
      this.movies.push(movie);
      resolve(movie);
    });
  }

  async getMany() {
    return await new Promise((resolve) => resolve(this.movies));
  }
}
