import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateServiceDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsString()
    imgPath: string;

    @IsString()
    @IsNotEmpty()
    type: String;

    @IsString()
    @IsNotEmpty()
    price: String;
}