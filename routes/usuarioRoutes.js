import express from 'express'

const router = express.Router();
router.get('/Login', (req, res) => {
    res.render('auth/Login')
});



export default router