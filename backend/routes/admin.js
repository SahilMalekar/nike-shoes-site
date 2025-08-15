import express from "express";
import { authenticateUser } from "../middleware/auth.js";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  addShoe,
  deleteShoe,
  updateShoe,
  promoteUser,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/shoes", authenticateUser, adminAuth, addShoe);

router.patch("/shoes/:id", authenticateUser, adminAuth, updateShoe);

router.delete("/shoes/:id", authenticateUser, adminAuth, deleteShoe);

//Protected route to promote user as admin

router.patch("/promote", authenticateUser, adminAuth, promoteUser);

// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTg0Y2VmMTQ3MTA5YWJlYjRjNTU1OSIsImlhdCI6MTc1NDg0MDk0NCwiZXhwIjoxNzU1NDQ1NzQ0fQ.CdqRyIdpJzRA1LsbKNUSmATzQKI3jbRhpNmoStBjY-4");

export default router;
