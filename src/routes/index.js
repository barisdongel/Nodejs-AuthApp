import Express from "express";
import express from "express";
import {User} from "../controllers/User.js";

const router = Express.Router();

router.use('/public', express.static('public'));
router.use('/uploads', express.static('public/uploads'));

router.get("/", User)
export default (app) => {
    app.use('/', router);
}