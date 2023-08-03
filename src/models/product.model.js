import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  quantity: Number,
}, {
  timestamps: true,
  versionKey: false,
});

const Product = model('Product', productSchema);

export default Product;