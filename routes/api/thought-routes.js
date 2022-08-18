const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// /api/thoughts
//post new thought (push thought id to associated user's thoughts array)
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getThoughtById).delete(deleteThought); //.put()

// example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
// }

// /api/thoughts/:thoughtId/reactions
//post new reaction (stored in thought's reactions array)
// router.route("/:thoughtId/reactions").post().delete()

module.exports = router;
