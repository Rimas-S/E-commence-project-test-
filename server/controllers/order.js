import Order from "../models/order.js";
import OrderService from "../services/order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      userId,
      products,
      quantity,
      subTotal,
      vat,
      shipping,
      freeShipping,
      totalAmound,
    } = req.body;

    const order = new Order({
      userId,
      products,
      quantity,
      subTotal,
      vat,
      shipping,
      freeShipping,
      totalAmound,
    });

    console.log(req.body);

    await OrderService.create(order);
    res.json({ success: "Successfully saved.", orderId: order._id });
  } catch (err) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};
