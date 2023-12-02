import { Req, UseGuards } from "@nestjs/common";
import { Controller, Get } from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor() {}

  // example of a jwt-protected route 
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
