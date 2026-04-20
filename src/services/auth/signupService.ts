import pool from "./../../db/connection.js"

type SignUpInput = {
    name: string;
    email: string;
    phone: string;
    password: string;
}

type SignUpOutput = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export const signupServie = async ({name, email, phone, password}:SignUpInput):Promise<SignUpOutput> => {

    if(!name || !email || !phone || !password){

        throw new Error("all field required");
    }

    // there will be just one query so we are using pool directly
    try{
    const result = await pool.query("INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)  RETURNING id, name, email, phone", [name, email, phone, password]);

    return result.rows[0];

    }catch(err){
        
        console.log("error : " , err);
        throw new Error("signup failed, internal error occured" );
        
    }
}