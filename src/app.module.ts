import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cars } from './entities/cars.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car_rental/car.module';
import { Users } from './entities/users.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CarModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'car_rental',
      entities: [Cars, Users]
    }),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
