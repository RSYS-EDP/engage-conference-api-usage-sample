const ConferenceAPI = require("engage-call-api-js-server-sdk/lib");
const BASE_URL =
  process.env.CONFERENCE_API_BASE_URL || "https://api.esmp-radisys.com/api/v1";
ConferenceAPI.OpenAPI.BASE = BASE_URL;

const makeCall = async (req, res) => {
  let token;
  try {
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };
  console.log("logcheck")
  try {
    const data = await ConferenceAPI.CallService.makeCall(
      req.params.ac_id,
      req.body
    );

    return res.json({ ...data });
  } catch (err) {
    console.log("error", err);
    return res.status(400).send(err.body);
  }
};

const getMultipleCallRecords = async (req, res) => {
  let token;
  try {
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };

  try {
    const data = await ConferenceAPI.CallService.getMultipleCallRecords(
      req.params.ac_id,
      req.query.to,
      req.query.startTime,
      req.query.endTime,
      req.query.status,
      req.query.flowtype,
      req.query.channel,
      req.query.direction,
      req.query.callType,
      req.query.limit,
      req.query.offSet,
      req.body
    );
    console.log("this is")
    return res.json({ ...data });
  } catch (err) {
    console.log("error", err);
    return res.status(400).send(err.body);
  }
};
const getCallRecord = async (req, res) => {
  let token;
  try {
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };

  try {
    const data = await ConferenceAPI.CallService.getCallRecordByCallId(
      req.params.ac_id,
      req.params.call_id
    );

    return res.json({ ...data });
  } catch (err) {
    console.log("error", err);
    return res.status(err.status).send(err.body);
  }
};

const updateCall = async (req, res) => {
  let token;
  try {
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };

  try {
    const data = await ConferenceAPI.CallService.putCallService(
      req.params.ac_id,
      req.params.call_id,
      req.body
    );

    return res.json({ ...data });
  } catch (err) {
    console.log("error", err);
    return res.status(err.status).send(err.body);
  }
};

const postCall = async (req, res) => {
  console.log("posterror");
  let token;
  console.log("logcheck1");
  try {
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };

  try {
    const data = await ConferenceAPI.CallService.postCallService(
      req.params.ac_id,
      req.params.call_id,
      req.body
    );

    return res.json({ ...data });
  } catch (err) {
    console.log("error", err);
    return res.status(err.status).send(err.body);
  }
};

module.exports = {
  makeCall,
  getMultipleCallRecords,
  getCallRecord,
  updateCall,
  postCall,
};