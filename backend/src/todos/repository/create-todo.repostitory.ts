import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTodoDto) {
    return await this.execute(data);
  }

  async execute(data: CreateTodoDto) {
    const { userId, ...rest } = data;

    return await this.prisma.todo.create({
      data: {
        ...rest,
        user: { connect: { id: userId } },
      },
    });
  }
}
