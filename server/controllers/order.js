import Order from "../models/order.js";
import OrderService from "../services/order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      userId,
      products,
      shippingAddress,
      subTotal,
      vat,
      shipping,
      freeShipping,
      totalAmound,
    } = req.body;

    const order = new Order({
      userId,
      products,
      shippingAddress,
      subTotal,
      vat,
      shipping,
      freeShipping,
      totalAmound,
    });

    await OrderService.create(order);
    res.json({ success: "Order successfully placed!", orderId: order._id });
  } catch (err) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};

export const findUserOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await OrderService.getOrdersByUserId(id);
    res.json(orders);
  } catch (error) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};

export const findAllOrders = async (req, res) => {
  try {
    const orders = await OrderService.findAllOrders();
    res.json(orders);
  } catch (error) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};
