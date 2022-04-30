import Order from "../models/order.js";

const create = async (order) => {
  return await order.save();
};

const getOrdersByUserId = async (id) => {
  const orders = await Order.find({ userId: id }).populate("products.id", "-price");
  return orders;
};

const findAllOrders = async() => {
  const orders = await Order.find();
  return orders;
}

export default { create, getOrdersByUserId, findAllOrders };
