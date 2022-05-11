import mongose from "mongoose";

//const URL = `mongodb://localhost:27017/test`;

const connectDB = async () => {
  try {
    const conn = await mongose.connect(process.env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
