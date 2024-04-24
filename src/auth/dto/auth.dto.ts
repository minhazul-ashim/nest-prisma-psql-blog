import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}
