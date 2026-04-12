import { Router } from "express";
import { signupController } from "../../controllers/auth/signupController.js";

const authsignuprouter = Router();

authsignuprouter.post("/signup", signupController);


 export default authsignuprouter;
