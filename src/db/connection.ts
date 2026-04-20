import dotenv from "dotenv";
import {Pool} from "pg"
dotenv.config(); ///load environment variables form .env file to process.env

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
})

export default pool;


//this connection method is called postgresql connection pool using pg driver 