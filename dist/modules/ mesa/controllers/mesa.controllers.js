"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaController = void 0;
const mesa_model_1 = require("../models/mesa.model");
class MesaController {
    constructor() {
        this.crearMesa = (req, res) => {
            const nuevaMesa = new mesa_model_1.default({
                mesa: req.body.mesa
            });
            nuevaMesa.save()
                .then(mesaCreada => {
                res.status(201).json({
                    ok: true,
                    mesa: mesaCreada,
                    message: 'Mesa creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Mesa no creada'
                });
            });
        };
        this.obtenerMesas = (req, res) => {
            mesa_model_1.default.find()
                .then(mesas => {
                res.status(200).json({
                    ok: true,
                    mesas: mesas
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarMesa = (req, res) => {
            mesa_model_1.default.findByIdAndUpdate(req.params.id, {
                mesa: req.body.mesa
            })
                .exec()
                .then(mesaActualizada => {
                res.status(200).json({
                    ok: true,
                    mesa: mesaActualizada
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Mesa no actualizada'
                });
            });
        };
        this.eliminarMesa = (req, res) => {
            mesa_model_1.default.findByIdAndDelete(req.params.id)
                .then(mesaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Mesa eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Mesa no eliminada'
                });
            });
        };
    }
}
exports.MesaController = MesaController;
//# sourceMappingURL=mesa.controllers.js.map