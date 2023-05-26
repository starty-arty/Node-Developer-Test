import db from "./models";

export const connectToDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed.", error);
  }
};
