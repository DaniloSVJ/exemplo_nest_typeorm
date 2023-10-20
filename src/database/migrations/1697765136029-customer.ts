import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class Customer1697765136029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'customer',
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
                            name:"cpf",
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
