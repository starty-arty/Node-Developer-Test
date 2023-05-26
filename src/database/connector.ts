import db from "../models";

const connectToDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed.", error);
  }
};

export default connectToDatabase;
