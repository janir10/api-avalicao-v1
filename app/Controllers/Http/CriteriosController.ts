// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import Criterio from "App/Models/Criterio";
import GenericResponseModel from "../Helpers/GenericResponseModel";

var responseMSG: GenericResponseModel;

export default class CriteriosController {
    constructor(){
        responseMSG = new GenericResponseModel();
    }

    public async show({request, response}){

        try{

            const page = request.input('p_page', 1)
            const limit = request.input('p_limit', 100)
            const data = request.all()

            let criterio = Database.from(Criterio.table).where('dm_type', data.dm_type);

            
           responseMSG.custom_error = false;
            responseMSG.status = true;
            if(criterio)
                responseMSG.data = await criterio.paginate(page, limit);
            return await response.json(responseMSG);
            

        }catch(e){
            responseMSG.status = false;
            responseMSG.custom_error = true;
            responseMSG.msg = e.message;
            return response.status(404).json(responseMSG);
        }
    }

    public async store({request, response}){

     

    }
}
