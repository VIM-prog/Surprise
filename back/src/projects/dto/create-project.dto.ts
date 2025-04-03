import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    fulldescription: string;

    @IsOptional()
    @IsString()
    imgPath: string;

    @IsNumber()
    @IsNotEmpty()
    serviceId: number;
}