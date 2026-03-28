const express = require("express");
const { getStreamToken } = require("../controllers/chat.controller");
const protectRoute = require("../../middleware/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat APIs
 */

/**
 * @swagger
 * /api/chats/token:
 *   get:
 *     summary: Get Stream token
 *     tags: [Chat]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Stream token returned
 */
router.get("/token", protectRoute, getStreamToken);

module.exports = router;