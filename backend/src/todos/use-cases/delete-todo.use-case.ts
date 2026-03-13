import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class DeleteteTodoUseCase {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
) {}

async execute(id: string) {
    try {
        this.logger.log('Deleting todo...');
        const todo = await this.deleteTodoRepository.delete(id);
        this.logger.log('ToDo deleted sucessfully!');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw new Error('Failed to deleted toDo');
    }
    }
}