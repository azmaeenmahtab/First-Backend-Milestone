import pool from "../../db/connection.js";
import type { Request, Response } from "express";


const SignUp = async (req: Request , res: Response) => {

    const {name, email, phone , password} = req.body; 

    if(!name || !email || !phone || !password){

        console.log("all fields are required");
        return res.status(400).json({
            message: "all fields required",
        })
    }

    // there will be just one query so we are using pool directly
    try{
    const result = await pool.query("INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)  RETURNING id, name, email, phone", [name, email, phone, password]);

    return res.status(201).json({
        message: "user created success",
        user: result.rows[0],
    })

    }catch(err){
        console.log("error happened ", err);
        return res.status(500).json({
            message: "cant create user, internal error occured",
            error: err,
        })
    }
    
    //what to add
}
