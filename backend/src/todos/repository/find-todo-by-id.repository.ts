import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async execute(id: number) {
        return await this.prisma.todo.findUnique({ id })
    }
}