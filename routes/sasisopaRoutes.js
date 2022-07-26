import express from "express";
//Importamos los controladores
import { registrar } from "../controllers/sasisopaController.js";
const router = express.Router();
//Ruta para residuos
router.post("/",registrar);

export default router;