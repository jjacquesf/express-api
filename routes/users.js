const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');
const auth = require('../utils/auth.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
  *     GenericResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
router.get('/', controller.getAll);

 /**
  * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
*/
router.get('/:id', controller.getOne);

 /**
  * @swagger
 * /users:
 *   post:
 *     summary: Create user with data sent
 *     description: Create user with data sent
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Name of the user
 *         schema:
 *           type: string
  *       - in: path
 *         name: email
 *         required: true
 *         description: Email of the user
 *         schema:
 *           type: string
 *           fotmat: email
 *     responses:
 *       200:
 *         description: Success true if user deleted otherwise false.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenericResponse'
*/
router.post('/', auth.isLoggedIn, controller.create);

 /**
  * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user by id
 *     description: Update user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success true if user deleted otherwise false.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenericResponse'
*/
router.put('/:id', auth.isLoggedIn, controller.updateOne);

 /**
  * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user by id
 *     description: Delete the user with id 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success true if user deleted otherwise false.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenericResponse'
*/
router.delete('/:id', auth.isLoggedIn, controller.delete);

module.exports = router;
