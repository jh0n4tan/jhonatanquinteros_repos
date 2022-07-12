import { Request, Response } from "express";

const tribe_controller = ({ axios,AppDataSource,Tribe,Metrics,mockRequestValues }:any)=>({
       get: async(req:Request,res:Response)=>{
              const id_tribe = req.params.id      
              
              if(!id_tribe || (id_tribe).toString().trim().length === 0 ) return res.status(404).send({msg:"Se debe enviar el id de la tribu a consultar"});
       
              const tribe = await AppDataSource.getRepository(Tribe).findOneBy({
                     id_tribe: parseInt(id_tribe)
                 });
       
              if(!tribe) return res.status(404).send({msg:"La tribu no se encuentra registrada"});
              
              const init_date = new Date('2022-01-01 00:00:00').toISOString();
              const end_date = new Date('2022-12-31 00:00:00').toISOString();
       
              const result = await AppDataSource
              .getRepository(Metrics)
              .createQueryBuilder("metrics")
              .innerJoinAndSelect("metrics.id_repository", "repository")
              .innerJoinAndSelect("repository.id_tribe", "tribe")
              .innerJoinAndSelect("tribe.id_organization", "organization")
              .where("repository.id_tribe = :id_tribe ")
              .andWhere("repository.state = :state ")
              .andWhere("repository.create_time > :init_date ")
              .andWhere("repository.create_time < :end_date ")
              .andWhere("metrics.coverage > :coverage ")       
              .setParameters({ id_tribe, state: "E", init_date, end_date ,coverage: 75 })
              .getMany();
       
              if(result.length===0){return res.status(200).send({msg:"La tribu no tiene repositorios que cumplan con la cobertura necesaria"})};
       
              const mockConsult = await axios.get('http://localhost:3000/mockserver');
              const filtrado = mockConsult.data[0].respositories.filter( (x:any)=>
                     x.id==id_tribe
              )
       
              const arrResult = result.map((x:any)=>({
                     id:x.id_repository.id_repository,
                     name:x.id_repository.name.trim(),
                     tribe: x.id_repository.id_tribe.name.trim(),
                     organization:x.id_repository.id_tribe.id_organization.name.trim(),
                     coverage:x.coverage,
                     codeSmells:x.code_smells,
                     bugs:x.bugs,
                     vulnerabilities:x.vulnerabilities,
                     hospots:x.hospot,
                     verificationState:mockRequestValues[filtrado[0].state],
                     state:x.id_repository.state
              }))
       
              return res.status(200).send({
                     repositories:[...arrResult]
              });
       }
});

export default tribe_controller;


