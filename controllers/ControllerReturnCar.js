import { ServiceReturnCar } from "../services/ServiceReturnCar.js"

export class ControllerReturnCar{
  constructor() {}
  async guardarDevolucion(request, response){
    try{

      let serviceReturnCar= new ServiceReturnCar()

      await serviceReturnCar.guardarDevolucion(request.body)

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
  
  async buscarDevoluciones(request, response){
    try{
      let serviceReturnCar= new ServiceReturnCar()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de busReturnCar',
        'datos' : await serviceReturnCar.buscarDevoluciones()
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de busqueda: ' + error
      })
    }
  }

  async buscarDevolucionId(request, response){
    try{
      let serviceReturnCar= new ServiceReturnCar()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de busReturnCar por id',
        'datos' : await serviceReturnCar.buscarDevolucionId(request.params.id)
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de busReturnCar por id: ' + error
      })
    }
  }

  async modificarDevolucion(request, response){
    try{
      let serviceReturnCar= new ServiceReturnCar()

      await serviceReturnCar.modificarDevolucion(request.params.id,request.body)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de modifiReturnCar',
        'datos' : request.body
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de modifiReturnCar' + error
      })
    }
  }
  async eliminarDevolucion(request, response){
    try{
      let serviceReturnCar= new ServiceReturnCar()

      await serviceReturnCar.eliminarDevolucion(request.params.id)

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