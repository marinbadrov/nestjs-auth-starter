export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
