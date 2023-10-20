import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import  {myDataSource}  from './database/database.providers';
import {Driver} from './database/entities/driver.entities'

@Module({
  imports: [TypeOrmModule.forRoot({...myDataSource.options}),
    TypeOrmModule.forFeature([Driver])
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
