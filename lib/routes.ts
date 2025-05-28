
import { MesaRoutes } from "./modules/ mesa/routes/mesa.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private mesaRoutes: MesaRoutes = new MesaRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
    }
}