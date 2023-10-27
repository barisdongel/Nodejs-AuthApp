import Express from "express";
import express from "express";
import {example} from "../controllers/Auth.js";

const router = Express.Router();

router.use('/public', express.static('public'));
router.use('/uploads', express.static('public/uploads'));

router.get("/", example)
export default (app) => {
    app.use('/', router)
}