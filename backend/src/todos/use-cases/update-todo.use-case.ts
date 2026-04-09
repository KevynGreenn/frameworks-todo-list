import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase {
  constructor(
    private readonly UpdateTodoRepository: UpdateTodoRepository,
    private readonly FindTodoByIdRepositiory: FindTodoByIdRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateTodoDto) {
    try {
      this.logger.log("Updating todo...");
      const todo = await this.FindTodoByIdRepositiory.execute(id);

      if (!todo) {
        throw new Error("Todo not found");
      }

      const updatedTodo = await this.UpdateTodoRepository.update(id, data);
      this.logger.log("Todo updated successfully!");
      return updatedTodo;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}