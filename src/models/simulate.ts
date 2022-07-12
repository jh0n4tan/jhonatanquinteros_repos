import axios from 'axios';
import mockRequestValues from '../utils/mockRequestValues';

export default class simulate{

    static async getsimulate (){
        const result = await axios.get('http://localhost:3000/mockserver');
        const respositories = result.data[0].respositories.map((repos:any)=>{
            return {...repos,state:mockRequestValues[repos.state]}
        });

        return {...result.data[0],respositories};
    }
}