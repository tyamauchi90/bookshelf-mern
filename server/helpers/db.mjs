import mongoose from "mongoose";

mongoose.set("strictQuery", true);

import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
