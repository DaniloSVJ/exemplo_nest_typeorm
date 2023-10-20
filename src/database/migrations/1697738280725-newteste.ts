import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Newdriver1697673113116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table(
                    {
                        name: 'driver',
                        columns: [
                            {
                                name:"id",
                                type: "int",
                                isPrimary: true,
                                isGenerated: true,
                                generationStrategy: 'increment'
                            },
                            {
                                name:"name",
                                type: "varchar",
                                
                            },
                            {
                                name:"license",
                                type: "varchar",
                               
                                
                            },                    
                             
                        ]
                    }
                )
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
