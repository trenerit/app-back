import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(login: string, userPass: string, role: string) {
        const user = await this.usersService.getUserLogin(login);

        console.log('tu',user?.pass);

        if(!user) {
            throw new UnauthorizedException('Nieprawidłowe dane logowania');
        }
        
        const passwdValid: string = createHash('sha1').update(userPass).digest('hex');

        console.log(user.pass, passwdValid);
        
        if(user.pass != passwdValid) {
            throw new UnauthorizedException('Nieprawidłowe dane logowania2');
        }

        const {pass, ...result} = user;

        return result;
    }

    async login(user: any) {
        const payload = {sub: user.id, login: user.login, role: user.role};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
