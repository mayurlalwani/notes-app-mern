const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(`MongoDB connected:${con.connection.host}`);
  } catch (error) {
    console.log({ error });
    process.exit();
  }
};

module.exports = connectDB;
