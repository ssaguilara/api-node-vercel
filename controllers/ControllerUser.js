import { ServiceUser } from "../services/ServiceUser.js";

export class ControllerUser {
  constructor() {}
  async guardarUsuario(request, response) {
    try {
      let serviceUser = new ServiceUser();

      await serviceUser.guardarUsuario(request.body);

      response.status(200).json({
        mensaje: "exito en la operacion de guardado",
        datos: request.body,
      });
    } catch (error) {
      response.status(200).json({
        mensaje: "error en la operacion de registro: " + error,
      });
    }
  }

  async buscarUsuarios(request, response) {
    try {
      let serviceUser = new ServiceUser();

      response.status(200).json({
        mensaje: "exito en la operacion de buscar",
        datos: await serviceUser.buscarUsuarios(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "error en la operacion de busqueda: " + error,
      });
    }
  }

  async buscarUsuarioId(request, response) {
    try {
      let serviceUser = new ServiceUser();

      response.status(200).json({
        mensaje: "exito en la operacion de buscar por id",
        datos: await serviceUser.buscarUsuarioId(request.params.id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operacion de buscar por id: " + error,
      });
    }
  }

  async modificarUsuario(request, response) {
    try {
      let serviceUser = new ServiceUser();

      await serviceUser.modificarUsuario(request.params.id, request.body);

      response.status(200).json({
        mensaje: "exito en la operacion de modificar",
        datos: request.body,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operacion de modificar" + error,
      });
    }
  }
  async eliminarUsuario(request, response) {
    try {
      let serviceUser = new ServiceUser();

      await serviceUser.eliminarUsuario(request.params.id);

      response.status(200).json({
        mensaje: "exito en la operacion de borrado",
        datos: "se ha eliminado la reservacion con id: " + request.params.id,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Error en la operacion de borrado: " + error,
      });
    }
  }
}
