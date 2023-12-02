import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import "reflect-metadata";
import { databaseOptions } from "./db";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseOptions),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
