import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthUserDto } from "./dto/auth-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(@Body() loginDto: AuthUserDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
