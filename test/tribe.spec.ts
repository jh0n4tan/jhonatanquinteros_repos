import tribus from '../src/controllers/tribe.controller';

describe('testing endpoint',()=>{
    describe('metrics by tribe',()=>{
        it('second scenario',async()=>{

            const req:any = {
                params: {id:7}      
            }

            const res:any = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }  
            
            const AppDataSource = async ():Promise<void>=>{

            }

            tribus(req,res);
            expect(res.status.mock.calls).toEqual([[404]]);
            expect(res.send.mock.calls).toEqual([[1]]);           
           
        })
    })
})