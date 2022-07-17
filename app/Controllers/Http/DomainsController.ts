import Database from "@ioc:Adonis/Lucid/Database";
import Domain from "App/Models/Domain";
import Config from "../Helpers/Config";
import GenericResponseModel from "../Helpers/GenericResponseModel";

// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
var responseMSG: GenericResponseModel;

export default class DomainsController {
    constructor(){
        responseMSG = new GenericResponseModel();
    }
    
    public async show({request, response}){

        try{

            
            //const data = request.all()

            let domain = Database.from(Domain.table);
            
            responseMSG.custom_error = false;
            responseMSG.status = true;
            if(domain)
                responseMSG.data = await domain
            return await response.json(responseMSG);
            

        }catch(e){
            responseMSG.status = false;
            responseMSG.custom_error = true;
            responseMSG.msg = e.message;
            return response.status(404).json(responseMSG);
        }
    }

    public async store({request, response}){

        try{

            const data = request.all()
            let dominios:[] = data.dominios ?? [];
            let list = new Array<Domain>();

            for (let i = 0; i <dominios.length; i++){
                console.log(dominios[i]['description']);
                let domain = new Domain();
                domain.description = dominios[i]['description'];
                domain.domain_type = "PRIVATE";
                domain.dominio = data.dominio;
                domain.ordem = i;
                domain.status = Config.ATIVO; 
                domain.valor = dominios[i]['valor'];
                domain.save();
                list.push(domain);
            }
            responseMSG.custom_error = false;
            responseMSG.status = true;
            responseMSG.data = list;
            return await response.json(responseMSG);
            

        }catch(e){
            responseMSG.status = false;
            responseMSG.custom_error = true;
            responseMSG.msg = e.message;
            return response.status(404).json(responseMSG);
        }
    }


    public async destroy({params, response}){
       
        try{

            let dominio =  Database.from(Domain.table).where("id", params.id);

            if(dominio)
                await dominio.delete();
            responseMSG.custom_error = false;
            responseMSG.status = true;
            return await response.json(responseMSG);

        }catch(e){
            responseMSG.status = false;
            responseMSG.custom_error = true;
            responseMSG.msg = e.message;
            return response.status(404).json(responseMSG);
        }
    }


    /*public async update({request, params, response}){
       
        try{
            const data = request.all()
            let dominio =  Database.from(Domain.table).where("id", params.id);
            
                
            responseMSG.custom_error = false;
            responseMSG.status = true;
            return await response.json(responseMSG);

        }catch(e){
            responseMSG.status = false;
            responseMSG.custom_error = true;
            responseMSG.msg = e.message;
            return response.status(404).json(responseMSG);
        }
    }*/
    
}
