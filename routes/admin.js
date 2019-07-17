const express = require("express");

const router = express.Router();
const { body, check } = require("express-validator");

const isAuth = require("../middleware/is-auth");

const adminController = require("../controllers/admin");

router
  .route("/add-product")
  .get(isAuth, adminController.getAddProduct)
  .post(
    [
      body("title")
        .isString()
        .isLength({ min: 3 })
        .trim(),
      body("price").isFloat(),
      body("description")
        .isLength({ min: 8, max: 200 })
        .trim()
    ],
    isAuth,
    adminController.postAddProduct
  );

router.route("/products").get(isAuth, adminController.getProducts);

router
  .route("/edit-product/:productId")
  .get(isAuth, adminController.getEditProduct);

router.route("/edit-product").post(
  [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price").isFloat(),
    body("description")
      .isLength({ min: 8, max: 200 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

router.route("/delete-product").post(isAuth, adminController.deleteProduct);

module.exports = router;
