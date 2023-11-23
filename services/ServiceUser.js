import { modelUser } from "../models/modelUser.js"

export class ServiceUser{
    constructor(){}

    async guardarUsuario(datos){
        let nuevoUsuario = new modelUser(datos)
        return await nuevoUsuario.save()
    }

    async buscarUsuarios(){
        let buscarUsuarios = await modelUser.find()
        return buscarUsuarios
    }

    findOne
    async buscarUsuarioId(id){
        let buscarUsuarioId = await modelUser.findById(id)
        return buscarUsuarioId
    }

    async modificarUsuario(id,datos){
        return await modelUser.findByIdAndUpdate(id,datos)
    }

    async eliminarUsuario(id){
        return await modelUser.findByIdAndDelete(id)
    }

}