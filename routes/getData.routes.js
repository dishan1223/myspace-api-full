import express from 'express';
import getData from '../controller/getData.controller.js';
const getDataRouter = express.Router();


getDataRouter.get("/", getData);

export default getDataRouter;
