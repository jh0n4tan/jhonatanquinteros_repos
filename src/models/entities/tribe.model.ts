import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, TableForeignKey } from 'typeorm';
import { Organization } from './organization.model';


@Entity()
export class Tribe{

    @PrimaryColumn({ type: "int", nullable: false })
    id_tribe: number

    @Column({ type: "char", length: 50, nullable: false  })
    name: string
    
    @Column({ type: "int", nullable: false  })
    status: number 
    
    
    @ManyToOne(()=>Organization)
    @JoinColumn({ name: 'id_organization' })
    @Column()
    id_organization:Organization
    

}