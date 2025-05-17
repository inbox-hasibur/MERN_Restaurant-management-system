import express from 'express';
import { createOrder, getOrders, updateOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/:userId', getOrders);
router.put('/:orderId', updateOrder);

export default router;