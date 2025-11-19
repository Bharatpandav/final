import express from 'express';
import { allOrders, userOrders,placeOrder, updateStatus,} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';
// , placeOrderStripe, placeOrderRazorpay, verifyStripe,verifyRazorpay


const orderRouter = express.Router();


// admin features
orderRouter.post('/list', adminAuth,allOrders);
orderRouter.post('/status', adminAuth, updateStatus);


// payment features
orderRouter.post('/place', authUser,placeOrder);
// orderRouter.post('/stripe', authUser, placeOrderStripe);
// orderRouter.post('/razorpay', authUser, placeOrderRazorpay);


// user features
orderRouter.post('/userorders', authUser, userOrders);


// verify payment
// orderRouter.post('/verifyStripe', authUser, verifyStripe);
// orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);

export default orderRouter;
