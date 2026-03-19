import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class DeleteteTodoUseCase {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
) {}

async execute(id: string) {
    try {
        this.logger.log('Deleting todo...');
        
        const todo = await this.findTodoByIdRepository.execute(id);

        if(!todo) {
            throw new NotFoundException('ToDo not found');
        }

        await this.deleteTodoRepository.execute(id);
        await this.logger.log('ToDo deleted sucessfully!');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw error;
    }
    }
}