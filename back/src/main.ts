import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Surprise')
  .setDescription(`We work with my project 'Surprise'`)
  .setVersion('1.0')
  .build();
  const configService = app.get(ConfigService);
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true
    })
  )
  const port = configService.get<number>('PORT') || 4000;
  const nodeEnv = configService.get<string>('NODE_ENV') || 'development';
  const host = configService.get<string>('HOST') || 'localhost:3000';

  if (nodeEnv === 'development') {
    app.enableCors({
      origin: host,
      methods: ['GET', 'POST', 'DELETE', 'PATCH']
    })  
    await app.listen(port);
  }
}
bootstrap();
