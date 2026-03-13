import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly findAllTodoRepository: FindAllTodosRepository,
        private readonly logger: Logger,
    ){}

async execute(data: CreateTodoDto) {
    try {
        this.logger.log('Finding ToDos...')
        const todo = await this.findAllTodoRepository.FindMany(data);
        this.logger.log('ToDos found succesfully')
   }    catch (error) {
        this.logger.error(error)
        throw new Error('Failed to find ToDos');
        
    }
  }
}