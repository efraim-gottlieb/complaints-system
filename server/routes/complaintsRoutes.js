import express from "express";
import * as complaintsController from "../controllers/complaintsControllers.js";
const router = express.Router();
import { auth } from "../middlewares/auth.js";
router.route("/")
  .get(auth ,complaintsController.getComplaints)
  .post(complaintsController.createComplaint)


export default router;