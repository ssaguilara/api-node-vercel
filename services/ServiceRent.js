import { modelRent } from "../models/modelRent.js"

export class ServiceRent{
    constructor(){}

    async guardarAlquiler(datos){
        let nuevoAlquiler = new modelRent(datos)
        return await nuevoAlquiler.save()
    }
    async buscarAlquilers(){
        let buscarAlquilers = await modelRent.find()
        return buscarAlquilers
    }
    async buscarAlquilerId(id){
        let buscarAlquilerId = await modelRent.findById(id)
        return buscarAlquilerId
    }
    async modificarAlquiler(id,datos){
        return await modelRent.findByIdAndUpdate(id,datos)
    }

    async eliminarAlquiler(id){
        return await modelRent.findByIdAndDelete(id)
    }
}