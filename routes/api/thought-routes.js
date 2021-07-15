const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction} = require('../../controllers/thought-controller');

router
    .route('/:userId')
    .post(addThought);
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);
router
    .route('/:thoughtID/reactions')
    .post(addReaction)
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;