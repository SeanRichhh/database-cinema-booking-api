const express = require("express");
const {
    getMovies,
    createMovie,
    getMoviebyId
} = require('../controllers/movies');

const router = express.Router();


router.get("/", getMovies);
router.post('/', createMovie)
router.get('/:id', getMoviebyId)

module.exports = router;