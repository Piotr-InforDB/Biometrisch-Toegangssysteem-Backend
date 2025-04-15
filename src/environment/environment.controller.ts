import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { Environment } from './entities/environment.entity';

@Controller('environments')
export class EnvironmentController {
  constructor(private readonly service: EnvironmentService) {}

  @Post()
  create(@Body() createEnvironmentDto: CreateEnvironmentDto) {
    return this.service.create(createEnvironmentDto);
  }

  @Get()
  findAll(): Promise<Environment[]> {
    return this.service.findAll();
  }
}
