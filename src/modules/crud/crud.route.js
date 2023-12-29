import express from 'express'

import { DeleteProduce, addProduce, getAllProduce, updateProduce } from '../crud.controller.js';

let router = express.Router();

router.post('/products', addProduce)
router.get('/products', getAllProduce)
router.delete('/products/:_id', DeleteProduce)
router.put('/products', updateProduce)

export default router