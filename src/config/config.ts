require("dotenv").config();

export default {
  port: process.env.PORT || 8000,
  webSocketOriginWhitelist:
    process.env.WEBSOCKET_ORIGIN_WHITELIST?.split(",") || [],
};
