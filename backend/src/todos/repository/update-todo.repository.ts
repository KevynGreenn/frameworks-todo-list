import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class UpdateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, data: UpdateTodoDto) {
    return await this.execute(id, data);
  }

  async execute(id: string, data: UpdateTodoDto) {
    const { userId, ...rest } = data;

    return await this.prisma.todo.update({
      where: { id },
      data: {
        ...rest,
        ...(userId ? { user: { connect: { id: userId } } } : {}),
      },
    });
  }
}
