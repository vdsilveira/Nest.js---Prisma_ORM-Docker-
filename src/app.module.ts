import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModuleModule } from './users-module/users-module.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModuleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
