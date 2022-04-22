import Order from "../models/order.js";

const create = async (order) => {
  return await order.save();
};

export default { create };
