import { Injectable, UnauthorizedException,NotFoundException, BadGatewayException } from '@nestjs/common';
import {Driver} from './database/entities/driver.entities'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {IDriverDTO} from './DTOs/drivermodelDto'

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async getFindOne(id:number):Promise<IDriverDTO> {
    const driver =  await this.driverRepository.findOne({
      where:{
        id:id
      }
    })

    if(!driver){
      throw new  NotFoundException("Motorista não foi criado")
    }
    return driver
  }

  async createDriver(data:IDriverDTO):Promise<string>{
    const {license} = await data
    const driver = await this.driverRepository.findOne({
      where:{
        license:license
      }
    })

    console.log(driver)

    if(driver){
      throw new  UnauthorizedException("Motorista já criado")
    }

    const newDriver =  this.driverRepository.create(data)

    this.driverRepository.save(data)

    return ('Motorista Criados com sucesso')

  }
}
