import { Module } from '@nestjs/common';
import { MoviesModule } from '../movies/movies.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [MoviesModule, UsersModule],
})
export class AppModule {}
