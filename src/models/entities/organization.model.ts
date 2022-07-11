import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Organization{

@PrimaryColumn({ type: "int", nullable: false })
id_organization: number

@Column("char", { length: 50, nullable: false })
name: string

@Column({ type: "int", nullable: false  })
status: number 

}