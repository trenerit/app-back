import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigService } from './jwt-config.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    // ważne: async rejestracja JWT z użyciem ConfigService
    JwtModule.registerAsync({
        imports: [ConfigModule],
        useClass: JwtConfigService
    }
    ),
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy, JwtConfigService],
  controllers: [AuthController]
})
export class AuthModule {}
