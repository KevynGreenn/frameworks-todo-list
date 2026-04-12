import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DeleteTodoRepository, FindTodoByIdRepository } from '../repository';

@Injectable()
export class DeleteTodoUseCase {
  constructor(
    private readonly deleteTodoRepository: DeleteTodoRepository,
    private readonly findTodoByIdRepository: FindTodoByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      this.logger.log('Deleting todo...');

      const todo = await this.findTodoByIdRepository.execute(id);

      if (!todo) {
        throw new NotFoundException('ToDo not found');
      }

      await this.deleteTodoRepository.execute(id);
      this.logger.log('ToDo deleted sucessfully!');
      return todo;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
