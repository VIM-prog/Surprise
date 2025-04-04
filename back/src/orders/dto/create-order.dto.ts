import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto{
    @IsNotEmpty()
    @IsString()
    firstname: string

    @IsNotEmpty()
    @IsString()
    lastname: string

    @IsOptional()
    @IsString()
    surname: string

    @IsOptional()
    @IsString()
    mail: string

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
    dateOrd: Date;

    @IsOptional()
    @IsNumber()
    serviceId: number

    @IsOptional()
    @IsNumber()
    JobId: number
}