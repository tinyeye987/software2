const express = require("express");

const {
  addMarks,
  getMarks,
  updateMark,
  deleteMark,
  getAllMarksForGivenProjectId,
} = require("../controllers/markController");
const markRouter = express.Router();

// Role base REST apis
const verifyToken = require("../middlewares/varifyJwtToken");
const checkRole = require("../middlewares/roleVerification");

markRouter.post("/create", addMarks);
markRouter.post("/get", getMarks);
markRouter.post("/update", updateMark);
markRouter.post("/delete", deleteMark);
markRouter.post("/getAllMarks", getAllMarksForGivenProjectId);

module.exports = markRouter;
