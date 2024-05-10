import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO : Need to make this swagger module separate from the main TS file;
  const config = new DocumentBuilder()
    .setTitle('Blog')
    .setDescription('The Nest Js Blog API documentation')
    .setVersion('1.0')
    .addTag('nestBlog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDocs', app, document);

  // whitelist is true because I want no extra body properties without the ones in the schema. It strips out the extra undefined properties;
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
