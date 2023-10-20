import { Controller, Get , Post,Param ,Body,HttpCode, MiddlewareConsumer} from '@nestjs/common';
import { AppService } from './app.service';
import {  Repository} from 'Typeorm'
import {IDriverDTO}  from './DTOs/drivermodelDto'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @HttpCode(400)
  @Get()
  getHelloDanilo(): string {
    return this.appService.getHello();
  }
  @HttpCode(200)
  @Get(':id')
  getFindOne(@Param('id') id:number) {
    return this.appService.getFindOne(id);
  }

  @HttpCode(201)
  @Post()
  postCreteDriver(@Body() data: IDriverDTO):any{
     return this.appService.createDriver(data)
  }
  
}
