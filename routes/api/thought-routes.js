const router = require('express').Router();
const { 
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought, 
    removeThought, 
    addReaction, 
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

//    /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// /api/thoughts/<userId>/<thoughtID>    
router
    .route('/:userId/:thoughtId')
    .post(addReaction);

router
    .route('/:userID/:thoughtID/:reactionId')
    .delete(removeReaction);

module.exports = router;