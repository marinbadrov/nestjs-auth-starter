import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./users/entities/user.entity";

export const databaseOptions: TypeOrmModuleOptions = {
  type: "sqlite",
  database: "user-db",
  entities: [
    User,
  ],
  synchronize: true, // disable in PROD
};
