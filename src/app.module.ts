import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [NewsModule, UsersModule, LoginModule, RegisterModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
