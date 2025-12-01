import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from 'src/models/car.model';
import { UpdateResult } from 'typeorm';
import { SearchModel } from 'src/models/search.model';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCars(): Promise<Car[]> {
    return this.carService.getCars();
  }
  
  @Get(':id')
  getCar(@Param('id') id: number): Promise<Car | null> {
    return this.carService.getCar(id);
  }
  
  @Delete(':id')
  delCar(@Param('id') id: number): void {
    return this.carService.delCar(id);
  }

  @Post()
  addCar(@Body() data: Car): Promise<Car> {
    return this.carService.addCar(data);
  }
  
  @Patch(':id')
  updateCar(@Param('id') id: number, @Body() data: Car): Promise<UpdateResult> {
    return this.carService.updateCar(id, data);
  }
  
   // search cars
  // @Post('search')
  // searchCars(@Body() data: {brand: string}): Promise<Car[]> {
  //   return this.carService.searchCars(data);
  // }
  
  @Post('search')
  searchCars(@Body() data: SearchModel): Promise<Car[]> {
    return this.carService.searchCars(data);
  }
  
}
