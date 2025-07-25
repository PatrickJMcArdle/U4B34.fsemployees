import { getEmployees } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

// TODO: this file!

router.route("/")
.get(async (req, res) => {
  const employees = getEmployees();
  res.send(employees)
})
.post