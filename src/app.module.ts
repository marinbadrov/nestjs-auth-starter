import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import "reflect-metadata";
import { databaseOptions } from "./db";
import { UsersModule } from "./users/users.module";
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseOptions),
    AuthModule,
    UsersModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
