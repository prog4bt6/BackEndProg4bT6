"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mesaRoutes = void 0;
const mesa_controllers_1 = require("../mesa.controllers");
class mesaRoutes {
    constructor() {
        this.mesaController = new mesa_controllers_1.MesaController();
    }
    routes(app) {
        app.route('/mesa')
            .get(this.mesaController.obtenerMesas)
            .post(this.mesaController.crearMesa);
        app.route('/mesa/:id')
            .put(this.mesaController.actualizarMesa)
            .delete(this.mesaController.eliminarMesa);
    }
}
exports.mesaRoutes = mesaRoutes;
//# sourceMappingURL=mesa.routers.js.map