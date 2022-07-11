import tribus from '../src/controllers/tribe.controller';

describe('testing endpoint',()=>{
    describe('metrics by tribe',()=>{
        it('second scenario',async()=>{

            const req = {
                params: {id:7}
            }

            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }
            tribus(req:Request,res:Response);

            console.log(res.send.mock);
            expect(res.status.mock.calls).toEqual([[404]]);
            expect(res.send.mock.calls).toEqual([[1]]);           
           
        })
    })
})