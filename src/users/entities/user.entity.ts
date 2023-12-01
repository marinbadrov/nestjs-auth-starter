import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

@Entity()
export class User {
  @PrimaryColumn()
  @Generated("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default: UserRole.USER,
  })
  role: UserRole;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
