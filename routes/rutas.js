//* se importa el paquete de express
import express from 'express'
import cors from 'cors';
import { ControllerUser } from '../controllers/ControllerUser.js';
import { ControllerCar } from '../controllers/ControllerCar.js';
import { ControllerRent } from '../controllers/ControllerRent.js';
import { ControllerReturnCar } from '../controllers/ControllerReturnCar.js';


//*para poder llamar a un controlador
//* debo crear un objeto de la clase controladorHabitacion

let controladorUsuario = new ControllerUser();
let controladorCarro = new ControllerCar();
let controladorAlquiler = new ControllerRent();
let controladorDevolucion = new ControllerReturnCar();

export let rutas = express.Router()

// http://localhost:3000/api/

rutas.post('/api/user', cors(), controladorUsuario.guardarUsuario)
rutas.post('/api/car', cors(), controladorCarro.guardarCarro )
rutas.post('/api/rent', cors(), controladorAlquiler.guardarAlquiler)
rutas.post('/api/return', cors(), controladorDevolucion.guardarDevolucion)

// "2023-04-25T00:00:00.000Z"

// {
//     "username": "s1",
//     "name": "Sergio Aguilar",
//     "password": "s1",
//     "role":"Admin",
//     "reservvworld":"NBA"
// }

rutas.get('/api/cars', controladorCarro.buscarCarros)
rutas.get('/api/users', controladorUsuario.buscarUsuarios)
rutas.get('/api/rents', controladorAlquiler.buscarAlquilers)
rutas.get('/api/returns', controladorDevolucion.buscarDevoluciones)

rutas.get('/api/car/:id', controladorCarro.buscarCarroId)
rutas.get('/api/user/:id', controladorUsuario.buscarUsuarioId)
rutas.get('/api/rent/:id', controladorAlquiler.buscarAlquilerId)
rutas.get('/api/return/:id', controladorDevolucion.buscarDevolucionId)

rutas.put('/api/car/:id', controladorCarro.modificarCarro)
rutas.put('/api/user/:id', controladorUsuario.modificarUsuario)
rutas.put('/api/rent/:id', controladorAlquiler.modificarAlquiler)
rutas.put('/api/return/:id', controladorDevolucion.modificarDevolucion)

rutas.delete('/api/car/:id', controladorCarro.eliminarCarro)
rutas.delete('/api/user/:id', controladorUsuario.eliminarUsuario)
rutas.delete('/api/rent/:id', controladorAlquiler.eliminarAlquiler)
rutas.delete('/api/return/:id', controladorDevolucion.eliminarDevolucion)
