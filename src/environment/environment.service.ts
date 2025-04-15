import { Injectable } from '@nestjs/common';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Environment } from './entities/environment.entity';

@Injectable()
export class EnvironmentService {
  constructor(
    @InjectRepository(Environment)
    private envRepo: Repository<Environment>,
  ) {}

  async create(createEnvironmentDto: CreateEnvironmentDto) {
    const existing = await this.envRepo.findOne({
      where: { serial_number: createEnvironmentDto.serial_number },
    });

    if(existing){
      return existing;
    }

    const environment = this.envRepo.create(createEnvironmentDto);
    return this.envRepo.save(environment);
  }

  findAll(): Promise<Environment[]> {
    return this.envRepo.find();
  }
}
