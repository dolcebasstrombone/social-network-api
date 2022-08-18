const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// example data (post)
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
// }

//BONUS: remove associated thoughts when deleted

// /api/users/:userId/friends/:friendId

//post new friend
//delete friend

module.exports = router;
