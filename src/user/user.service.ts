import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createHash } from 'crypto';
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
  
  getUserLogin(login: string): Promise<User | null > {
    
    // const passwordSha1 = createHash('sha1').update(data.pass).digest('hex');

    return this.usersRepository.findOne({
      // select: {
      //   id: true,
      //   login: true
      // },
      where: {
        login
      }
    });
  }
}
