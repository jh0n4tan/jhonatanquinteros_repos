import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Repository } from './repository.model';

@Entity()
export class Metrics{
    
    @PrimaryColumn({ type: "int", nullable: false })
    @OneToOne(() => Repository)
    @JoinColumn({ name: 'id_repository' })    
    id_repository: Repository
    
    @Column({ type: "decimal", nullable: false, precision:2  })
    coverage: number
    
    @Column({ type: "int", nullable: false  })
    bugs: number 

    @Column({ type: "int", nullable: false  })
    vulnerabilities: number 

    @Column({ type: "int", nullable: false  })
    hospot: number 

    @Column({ type: "int", nullable: false  })
    code_smells: number   
    

}