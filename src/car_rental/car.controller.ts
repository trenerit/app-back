import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from 'src/models/car.model';
import { UpdateResult } from 'typeorm';
import { SearchModel } from 'src/models/search.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()

  @UseGuards(JwtAuthGuard)
  
  getCars(): Promise<Car[]> {
    return this.carService.getCars();
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getCar(@Param('id') id: number): Promise<Car | null> {
    return this.carService.getCar(id);
  }
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delCar(@Param('id') id: number): void {
    return this.carService.delCar(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  addCar(@Body() data: Car): Promise<Car> {
    return this.carService.addCar(data);
  }
  
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateCar(@Param('id') id: number, @Body() data: Car): Promise<UpdateResult> {
    return this.carService.updateCar(id, data);
  }
  
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateCarStatus(@Param('id') id: number, @Body() data: Car): Promise<UpdateResult> {
    return this.carService.updateCarStatus(id, data);
  }
  
  @Post('search')
  @UseGuards(JwtAuthGuard)
  searchCars(@Body() data: SearchModel): Promise<Car[]> {
    return this.carService.searchCars(data);
  }
  
}
