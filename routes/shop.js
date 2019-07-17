const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router
  .route("/cart")
  .get(isAuth, shopController.getCart)
  .post(isAuth, shopController.postCart);

router.get("/orders", isAuth, shopController.getOrders);

router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

router.post("/create-order", isAuth, shopController.postOrder);

router.get("/orders/:orderId", isAuth, shopController.getInvoice);

module.exports = router;
