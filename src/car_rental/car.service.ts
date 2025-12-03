import { Injectable } from '@nestjs/common';
import { Car } from 'src/models/car.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from 'src/entities/cars.entity';
import { Between, ILike, Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { SearchModel } from 'src/models/search.model';

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
  
  updateCarStatus(id: number, dataCar: Car): Promise<UpdateResult> {
    return this.carsRepository.update(id, dataCar);
  }
  
  searchCars(data: SearchModel): Promise<Car[]> {

    let where: Record<string, any> = {};
    
    if(data.column == 'brand') {
      where = {brand: ILike(`${data.searchText}%`)};
    } else if(data.column == 'model') {
      where = {model: ILike(`${data.searchText}%`)};
    } else {
      where = {price: ILike(`${data.searchText}%`)};
    }
    
    
    if(data.status == 'free') {
      where.is_rented = 0;
    } else if (data.status == 'rented') {
      where.is_rented = 1;
    } else {
      where.is_rented = Between(0, 1);
    }
    
    return this.carsRepository.find({
        where, order: {id: "DESC"}
    });
  }


}
