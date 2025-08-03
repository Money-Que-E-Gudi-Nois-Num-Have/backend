import { ValidationPipe } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';

export async function validateDto<T>(
  cls: ClassConstructor<T>,
  input: unknown,
): Promise<T> {
  const pipe = new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  });

  return await pipe.transform(input, {
    type: 'body',
    metatype: cls,
  });
}
