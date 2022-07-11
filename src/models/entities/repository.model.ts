import { Tribe } from './tribe.model';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class Repository{
    @PrimaryColumn({ type: "int", nullable: false })
    id_repository: number

    @ManyToOne(()=>Tribe)
    @JoinColumn({ name: 'id_tribe' })
    @Column()
    id_tribe:Tribe

    @Column({ type: "char", length: 50, nullable: false  })
    name: string
    
    @Column({ type: "char", length: 1, nullable: false  })
    state: number 

    @CreateDateColumn({type:"timestamp"})
    create_time: Timestamp

    @Column({ type: "char", length: 1, nullable: false  })
    status: number   

}