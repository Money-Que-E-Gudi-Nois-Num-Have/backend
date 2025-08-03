import { validateDto } from '../pipes/dto-validator.util';
import { ClassConstructor } from 'class-transformer';

export default function expectDtoToThrow<T>(
  cls: ClassConstructor<T>,
  dto: object,
  ...errors: string[]
) {
  return expect(validateDto(cls, dto)).rejects.toMatchObject({
    response: {
      message: expect.arrayContaining(errors),
    },
  });
}
