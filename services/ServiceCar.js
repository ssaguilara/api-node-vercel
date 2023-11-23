import { modelCar } from "../models/modelCar.js"

export class ServiceCar{
    constructor(){}

    async guardarVehiculo(datos){
        let nuevoVehiculo = new modelCar(datos)
        return await nuevoVehiculo.save()
    }
    async buscarVehiculos(){
        let buscarVehiculos = await modelCar.find()
        return buscarVehiculos
    }
    async buscarVehiculoId(id){
        let buscarVehiculosId = await modelCar.findById(id)
        return buscarVehiculosId
    }
    async modificarVehiculo(id,datos){
        return await modelCar.findByIdAndUpdate(id,datos)
    }

    async eliminarVehiculo(id){
        return await modelCar.findByIdAndDelete(id)
    }
}