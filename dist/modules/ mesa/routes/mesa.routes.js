"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaRoutes = void 0;
const mesa_controller_1 = require("../controllers/mesa.controller");
class MesaRoutes {
    constructor() {
        this.mesaController = new mesa_controller_1.MesaController();
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
exports.MesaRoutes = MesaRoutes;
//# sourceMappingURL=mesa.routes.js.map