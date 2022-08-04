import express from "express";
import TokenController from "../controller/TokenController";

const router = express.Router();

router.get("/getInfo", TokenController.getInfo);

export default router;
