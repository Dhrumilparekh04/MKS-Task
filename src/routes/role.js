const { Router } = require("express");
const router = Router();
const {
  createRole,
  getRoles,
  getRole,
  updateRole,
  deleteRole,
} = require("../controllers/role");

router.post("/", createRole);
router.get("/", getRoles);
router.get("/:id", getRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;
