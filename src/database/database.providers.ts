import { DataSource,DataSourceOptions } from 'typeorm';
import * as path from 'path'
import * as mysqlDriver from 'mysql2'
import {Driver} from './entities/driver.entities'
import {Customer} from './entities/customer.entities'


const pathMigration = path.join(__dirname, './migrations/1697765136029-customer.js');

console.log(pathMigration)
export  const myDataSource = new DataSource({
        //driver: mysqlDriver,
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'aulanest',
        synchronize: false,
        entities:[Driver,Customer],
        migrations: ['./migrations/1697765136029-customer.js'],
        migrationsRun:true,
        subscribers: ['src/subscriber/*{.ts,.js}']
      });
     
