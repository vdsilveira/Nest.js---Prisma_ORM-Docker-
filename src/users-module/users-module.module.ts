import { Module } from '@nestjs/common';
import { UsersModuleService } from './users-module.service';
import { UsersModuleController } from './users-module.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService, PrismaService],
})
export class UsersModuleModule {}
