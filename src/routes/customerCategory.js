const Router = require("express");
const router = Router();

const {
  createCustomerCategory,
  getCustomerCategories,
  getCustomerCategory,
  updateCustomerCategory,
  deleteCustomerCategory,
} = require("../controllers/customerCategory");

router.post("/", createCustomerCategory);
router.get("/", getCustomerCategories);
router.get("/:id", getCustomerCategory);
router.put("/:id", updateCustomerCategory);
router.delete("/:id", deleteCustomerCategory);

module.exports = router;