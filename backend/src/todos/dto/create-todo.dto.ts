import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';
import { TodoPriority } from '@prisma/client';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsEnum(TodoPriority)
  @IsOptional()
  priority?: TodoPriority;

  @IsDateString()
  @IsOptional()
  dueAt?: string;

  @IsDateString()
  @IsOptional()
  completedAt?: string;

  @IsString()
  userId: string;
}
