import { MesaController } from "../mesa.controllers";


export class mesaRoutes {
    private mesaController: MesaController = new MesaController(); 
    
    public routes(app): void {
        app.route('/mesa')
        .get(this.mesaController.obtenerMesas)
        .post(this.mesaController.crearMesa);

        app.route('/mesa/:id')
        .put(this.mesaController.actualizarMesa)
        .delete(this.mesaController.eliminarMesa);
    }
}