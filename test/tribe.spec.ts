import { tribe_controller } from '../src/controllers/index';
import { AppDataSource } from '../src/db/cockroach.connection';
import { Tribe } from '../src/models/entities/tribe.model';

describe('testing endpoint',()=>{
    describe('metrics by tribe',()=>{
        it('fisrt scenario',async()=>{   

        })

        it('second scenario',async()=>{            

            const AppDataSource = {
                getRepository: function() {
                  return this
                },
                findOneBy: function() { 
                }
            }

            const req:any = {
                params: {id:7}      
            }

            const res:any = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }  
            const controller = tribe_controller({AppDataSource,Tribe});

            await controller.get(req,res);

            expect(res.status.mock.calls).toEqual([[404]]);
            expect(res.send.mock.calls).toEqual([[{"msg": "La tribu no se encuentra registrada"}]]);           
           
        })
        it('third scenario',async()=>{   

        })
        it('fourth scenario',async()=>{   

        })
    })
})