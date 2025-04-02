import { IsOptional, IsString, IsIn, IsNotEmpty } from 'class-validator';

export class UpdateServiceDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;
  
    @IsOptional()
    @IsOptional()
    @IsString()
    imgPath?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    type?: String;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    price?: String;

    @IsOptional()
    @IsIn(['1', '0']) 
    active?: '1' | '0';
}