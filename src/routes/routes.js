import express from "express";
import { getARepo, getUserRepos } from "../controllers/repos.js";
const router = express.Router();

router.route("/repos").get(getUserRepos);
router.route("/repo").get(getARepo);

export default router;
