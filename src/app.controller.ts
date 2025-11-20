import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get(':id')
  getHello2(@Param('id') id: number): string {
    return this.appService.getHello2(id);
  }
  
  @Post()
  getHello3(@Body() data: object) {
    return this.appService.getHello3(data);
  }
  
  @Patch(':id')
  getHello4(@Param('id') id: number, @Body() data: object) {
    return this.appService.getHello4(id, data);
  }
}
