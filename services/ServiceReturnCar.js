import { modelReturnCar } from "../models/modelReturnCar.js"

export class ServiceReturnCar{
    constructor(){}

    async guardarDevolucion(datos){
        let nuevoDevolucion = new modelReturnCar(datos)
        return await nuevoDevolucion.save()
    }
    async buscarDevoluciones(){
        let buscarDevoluciones = await modelReturnCar.find()
        return buscarDevoluciones
    }
    async buscarDevolucionId(id){
        let buscarDevolucionId = await modelReturnCar.findById(id)
        return buscarDevolucionId
    }
    async modificarDevolucion(id,datos){
        return await modelReturnCar.findByIdAndUpdate(id,datos)
    }

    async eliminarDevolucion(id){
        return await modelReturnCar.findByIdAndDelete(id)
    }
}