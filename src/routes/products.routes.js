import { creatProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controller.js';



const routes = [
  {
    url: '/products/:id',
    method: 'GET',
    handler: getProduct
  },
  {
    url: '/products',
    method: 'GET',
    handler: getProducts
  },
  {
    url: '/products',
    method: 'POST',
    handler: creatProduct
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: deleteProduct
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: updateProduct
  },
];

export { routes };