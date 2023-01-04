const express = require("express");
const router = express.Router();
// importing conference API methods
const callController = require("../controllers/call");


router.post("/:ac_id/call", callController.makeCall);
router.get("/:ac_id/call/:call_id", callController.getCallRecord);
router.get("/:ac_id/call", callController.getMultipleCallRecords);
router.put("/:ac_id/call/:call_id", callController.updateCallPut);
router.post("/:ac_id/call/:call_id", callController.updateCallPost);

module.exports = router;
