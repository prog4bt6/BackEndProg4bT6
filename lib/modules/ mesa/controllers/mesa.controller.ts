import { Request, Response } from 'express';
import * as _ from 'lodash';
import Mesa from '../models/mesa.model';
import { exec } from 'child_process';

export class MesaController {
    crearMesa = (req: Request, res: Response) => {
        const nuevaMesa = new Mesa({
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
    }

    obtenerMesas = (req: Request, res: Response) => {
        Mesa.find()
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
    }

    actualizarMesa = (req: Request, res: Response) => {
        Mesa.findByIdAndUpdate(req.params.id,{
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
    }

    eliminarMesa = (req: Request, res: Response) => {
        Mesa.findByIdAndDelete(req.params.id)
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
    }
}