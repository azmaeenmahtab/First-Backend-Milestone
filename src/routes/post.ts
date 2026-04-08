import { Router } from "express";

const router = Router();

router.post("/postcreate", (req, res) => {

    const { title, description} = req.body;

    if(!title || !description){

        return res.status(400).json({
            message: "Title and description are required"
        })
    }

    

    res.json({
        message: "post created successfully"
    });
});

export default router;