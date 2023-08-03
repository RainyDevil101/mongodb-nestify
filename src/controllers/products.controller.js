import Product from '../models/product.model.js';

const getProduct = async (req, reply) => {
  // console.log(req.params.id);
  const product = await Product.findById(req.params.id);

  return reply.code(200).send(product);
};

const getProducts = async (req, reply) => {
  const products = await Product.find();
  return reply.code(200).send(products);
};

const creatProduct = async (req, reply) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  return reply.code(201).send(newProduct);
};

const deleteProduct = async (req, reply) => {
  await Product.findByIdAndDelete(req.params.id)
  return reply.code(204).send();
};

const updateProduct = async (req, reply) => {
  return reply.send('Updating product');
};

export {
  getProducts,
  getProduct,
  creatProduct,
  deleteProduct,
  updateProduct,
};