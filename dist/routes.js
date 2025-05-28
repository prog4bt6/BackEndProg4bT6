"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const mesa_routes_1 = require("./modules/ mesa/routes/mesa.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.mesaRoutes = new mesa_routes_1.MesaRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map