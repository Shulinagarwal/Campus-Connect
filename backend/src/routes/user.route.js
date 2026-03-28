const express = require("express");
const protectRoute = require("../../middleware/auth.middleware");
const {
  getRecommendedUsers,
  getFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendRequests,
} = require("../controllers/user.controller");

const router = express.Router();

router.use(protectRoute);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User APIs
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get recommended users
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of recommended users
 */
router.get("/", getRecommendedUsers);

/**
 * @swagger
 * /api/users/friends:
 *   get:
 *     summary: Get all friends
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 */
router.get("/friends", getFriends);

/**
 * @swagger
 * /api/users/friend-request/{userId}:
 *   post:
 *     summary: Send friend request
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 */
router.post("/friend-request/:userId", sendFriendRequest);

/**
 * @swagger
 * /api/users/friend-request/{userId}:
 *   put:
 *     summary: Accept friend request
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 */
router.put("/friend-request/:userId", acceptFriendRequest);

/**
 * @swagger
 * /api/users/friend-requests:
 *   get:
 *     summary: Get incoming friend requests
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 */
router.get("/friend-requests", getFriendRequests);

/**
 * @swagger
 * /api/users/outgoing-requests:
 *   get:
 *     summary: Get outgoing friend requests
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 */
router.get("/outgoing-requests", getOutgoingFriendRequests);

module.exports = router;