import Products from '../models/product.model.js';

const routes = [
  {
    url: '/products/:id',
    method: 'GET',
    handler: async(request, replay) => {
      await Products.find();
      replay.send('Single product');
    },
  },
  {
    url: '/products',
    method: 'GET',
    handler: async (request, replay) => {
      replay.send('Products');
    },
  },
  {
    url: '/products',
    method: 'POST',
    handler: async (request, replay) => {
      replay.send('Creating product');
    },
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: async (request, replay) => {
      replay.send('Deleting product');
    },
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: async (request, replay) => {
      replay.send('Updating product');
    },
  },
];

export { routes };