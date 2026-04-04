import { Router } from "express";

const router = Router();

router.post("/postcreate", (req, res) => {

    res.json({
        message: "post created successfully"
    });
});

export default router;