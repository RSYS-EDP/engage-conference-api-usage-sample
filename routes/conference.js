const express = require('express')
const router = express.Router();
// importing conference API methods
const conferenceController = require('../controllers/conference')


router.get('/:ac_id/room', conferenceController.getAllRoom);
router.post("/:ac_id/room/", conferenceController.createRoom);
router.get('/:ac_id/room/:rm_id', conferenceController.getRoom);
router.delete("/:ac_id/room/:rm_id", conferenceController.deleteRoom);
router.post("/:ac_id/room/:rm_id/join", conferenceController.joinRoom);
router.post("/:ac_id/room/:rm_id/play", conferenceController.playRoom);

module.exports = router;