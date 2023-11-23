import { ServiceCar } from "../services/ServiceCar.js"

export class ControllerCar{
  constructor() {}
  async guardarCarro(request, response){
    try{

      let serviceCar= new ServiceCar()

      await serviceCar.guardarVehiculo(request.body)

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
  
  async buscarCarros(request, response){
    try{
      let serviceCar= new ServiceCar()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar',
        'datos' : await serviceCar.buscarVehiculos()
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de busqueda: ' + error
      })
    }
  }

  async buscarCarroId(request, response){
    try{
      let serviceCar= new ServiceCar()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar por id',
        'datos' : await serviceCar.buscarVehiculoId(request.params.id)
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de buscar por id: ' + error
      })
    }
  }

  async modificarCarro(request, response){
    try{
      let serviceCar= new ServiceCar()

      await serviceCar.modificarVehiculo(request.params.id,request.body)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de modificar',
        'datos' : request.body
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de modificar' + error
      })
    }
  }
  async eliminarCarro(request, response){
    try{
      let serviceCar= new ServiceCar()

      await serviceCar.eliminarVehiculo(request.params.id)

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