import { Injectable } from '@nestjs/common';
import { CreateUsersModuleDto } from './dto/create-users-module.dto';
import { UpdateUsersModuleDto } from './dto/update-users-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersModuleService {
  constructor(private prisma: PrismaService) {}

  async create(createUsersModuleDto: CreateUsersModuleDto) {
    return this.prisma.user.create({
      data: {
        name: createUsersModuleDto.name,
        email: createUsersModuleDto.email,
        adress: createUsersModuleDto.adress,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUsersModuleDto: UpdateUsersModuleDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUsersModuleDto,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
