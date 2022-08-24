import express from "express";

const router = express.Router();

//reached by localhost:5000/posts
router.get('/', (req, res) => {
    res.send('This Works');
});

export default router;