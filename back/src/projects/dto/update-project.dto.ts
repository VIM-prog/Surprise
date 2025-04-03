import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProjectDto {
    @IsOptional() 
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsString()
    fulldescription: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    imgPath: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    serviseId: number;
}