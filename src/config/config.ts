require("dotenv").config();

export default {
  port: process.env.PORT || 8000,
  webSocketOriginWhitelist:
    process.env.WEBSOCKET_ORIGIN_WHITELIST?.split(",") || [],
  databaseConnection: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    username: process.env.MYSQL_USERNAME || "",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "",
  },
};
