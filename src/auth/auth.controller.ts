import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/models/login.model';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

constructor(private readonly authService: AuthService) {}

@Post('login')
async login(@Body() body: LoginDto) {
    
    const user = await this.authService.validateUser(body.login, body.password);
    return this.authService.login(user);
}

@UseGuards(JwtAuthGuard)
@Get('user')
getProfile(@Req() req: any) {
    return req.user;
}
}
