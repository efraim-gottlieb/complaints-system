import express from "express";
import * as complaintsController from "../controllers/complaintsControllers.js";
const router = express.Router();

router.route("/")
  .get(complaintsController.getComplaints)


export default router;