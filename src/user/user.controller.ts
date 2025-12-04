import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UserService } from './user.service';
import { User } from 'src/models/user.model';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  
  @Get(':id')
  getUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }
  
  // @Delete(':id')
  // delCar(@Param('id') id: number): void {
  //   return this.carService.delCar(id);
  // }

  // @Post()
  // addCar(@Body() data: Car): Promise<Car> {
  //   return this.carService.addCar(data);
  // }
  
  // @Patch(':id')
  // updateCar(@Param('id') id: number, @Body() data: Car): Promise<UpdateResult> {
  //   return this.carService.updateCar(id, data);
  // }
  
  // @Put(':id')
  // updateCarStatus(@Param('id') id: number, @Body() data: Car): Promise<UpdateResult> {
  //   return this.carService.updateCarStatus(id, data);
  // }
  
  // @Post('search')
  // searchCars(@Body() data: SearchModel): Promise<Car[]> {
  //   return this.carService.searchCars(data);
  // }
  
}
