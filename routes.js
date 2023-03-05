const routes = require("next-routes")();

routes
  // arg1-router接收到的地址   arg2-router要轉過去的呈現file地址
  // : 表示後面為變數
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
