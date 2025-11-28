import { Injectable } from '@nestjs/common';
import { Car } from 'src/models/car.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from 'src/entities/cars.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

@Injectable()
export class CarService {
  
  constructor(
    @InjectRepository(Cars)
    private carsRepository: Repository<Cars>,
  ) {}

  getCars(): Promise<Car[]> {
    return this.carsRepository.find({order: {id: "DESC"}});
  }
  
  getCar(id: number): Promise<Car | null> {
    return this.carsRepository.findOneBy({id});
  }
  
  delCar(id: number): void {
    this.carsRepository.delete(id);
  }

  addCar(dataCar: Car): Promise<Car> {
    return this.carsRepository.save(dataCar);
  }
  
  updateCar(id: number, dataCar: Car): Promise<UpdateResult> {
    return this.carsRepository.update(id, dataCar);
  }
  
  searchCars(data: {brand: string}): Promise<Car[]> {
    return this.carsRepository.find({where: {
      brand: data.brand
    }});
  }
}
