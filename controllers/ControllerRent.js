import { ServiceRent } from "../services/ServiceRent.js"

export class ControllerRent{
  constructor() {}
  async guardarAlquiler(request, response){
    try{

      let serviceRent= new ServiceRent()

      await serviceRent.guardarAlquiler(request.body)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de guardado',
        'datos' : request.body
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de registro: ' + error
      })
    }
  }
  
  async buscarAlquilers(request, response){
    try{
      let serviceRent= new ServiceRent()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de busRent',
        'datos' : await serviceRent.buscarAlquilers()
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de busqueda: ' + error
      })
    }
  }

  async buscarAlquilerId(request, response){
    try{
      let serviceRent= new ServiceRent()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de busRent por id',
        'datos' : await serviceRent.buscarAlquilerId(request.params.id)
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de busRent por id: ' + error
      })
    }
  }

  async modificarAlquiler(request, response){
    try{
      let serviceRent= new ServiceRent()

      await serviceRent.modificarAlquiler(request.params.id,request.body)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de modifiRent',
        'datos' : request.body
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de modifiRent' + error
      })
    }
  }
  async eliminarAlquiler(request, response){
    try{
      let serviceRent= new ServiceRent()

      await serviceRent.eliminarAlquiler(request.params.id)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de borrado',
        'datos': "se ha eliminado la reservacion con id: " + request.params.id
      })

    }catch(error){
      response.status(400).json({
        'mensaje' : 'Error en la operacion de borrado: ' + error
      })
    }
  }
}