// src/auth/jwt-config.service.ts
import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  // używane przez JwtModule.registerAsync
  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.getSecret('SECRET_JWT'),
      signOptions: {
        // liczba w sekundach – typ się zgadza
        expiresIn: this.getExpiresIn(),
      },
    };
  }

  // prosta metoda do sekretnika
  getSecret(p0: string): string {
    return this.configService.get<any>('JWT_SECRET');
  }

  // prosta metoda dla expiresIn
  getExpiresIn(): number {
    return this.configService.get<any>('JWT_EXPIRES_IN');
  }

  // jeżeli chcesz mieć ogólnego get'a do innych rzeczy:
//   get(key: string, defaultValue?: any): any {
//     return this.configService.get(key, defaultValue);
//   }
}
