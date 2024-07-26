const { Router } = require("express");
const router = Router();

const {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory");

router.post("/", createSubCategory);
router.get("/", getSubCategories);
router.get("/:id", getSubCategory);
router.put("/:id", updateSubCategory);
router.delete("/:id", deleteSubCategory);

module.exports = router;