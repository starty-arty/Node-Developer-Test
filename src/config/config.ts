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
  cacheConnection: {
    isCacheEnabled: process.env.ENABLE_CACHE == "true",
    port: process.env.REDIS_PORT || 6379,
  },
  maxMessageLength: 200,
  pagination: {
    defaultPageSize: 2,
    maxPageSize: 10,
  },
  webSocketEvents: ["sendMessage"],
};
