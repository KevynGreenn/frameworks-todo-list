import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class FindAllTodosRepository {
    findAll() {
        throw new Error("Method not implemented.");
    }
    FindMany(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

    async execute() {
    return await this.prisma.todo.FindMany();
    }
}