import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
  
  getUser(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({id});
  }
}
