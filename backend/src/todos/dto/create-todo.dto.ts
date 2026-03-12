import {
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsDateString,
    IsUUID,
    isNotEmpty,
    isDateString,
    isString,
    isDataURI,
    IsNegative,
    IsDate
} from "class-validator";

enum TodoPriority{
    LOW = ' LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}
export class CreateTodoDto {
    @IsString( )
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean;

    @IsEnum(TodoPriority)
    @IsNotEmpty()
    priority: TodoPriority;

    @IsDateString()
    @IsOptional()
    dueAt: Date;

    @IsDateString()
    completedAt: Date;

    @IsString()
    userId: string;

    @IsDateString()
    createdAt: Date;

    @IsDateString()
    @IsOptional()
    updatedAt: Date;
    id: string
}

