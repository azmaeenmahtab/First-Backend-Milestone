import type { Request, Response } from "express";
import { signupServie } from "../../services/auth/signupService.js";


export const signupController = async (req: Request, res: Response) => {

    const {name, email, phone , password} = req.body; 

    try{

        const user = await signupServie({name, email, phone, password});

        return res.status(201).json({
            message: "created user successfuly",
            user: user
        })
    }catch(err){

        if(err instanceof Error && err.message == "ALL_FIELDS_REQUIRED"){
            return res.status(400).json({
                message: "all fields required",
             })

         }

        return res.status(500).json({
            message: "error occured, cant create user",
          })
    }
}