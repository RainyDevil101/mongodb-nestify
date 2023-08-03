import mongoose from 'mongoose';

function connectDB() {

  mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));
};

export {connectDB};
