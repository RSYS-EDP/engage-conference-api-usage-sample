const ConferenceAPI = require("engage-call-api-js-server-sdk/lib");
const BASE_URL = process.env.CONFERENCE_API_BASE_URL || "https://api.esmp-radisys.com/api/v1";
ConferenceAPI.OpenAPI.BASE = BASE_URL;

// Create room API Call
const createRoom = async (req, res) => {
  let token;
  try {
    //spliting the keyword "Bearer" from the token sent in the request and adding keyvalue to varibale
    token = req.header("apikey");
  } catch (err) {
    return res
      .status(400)
      .send({ err: err.message, message: "Please check token in header" });
  }

  //setting the apikey
  ConferenceAPI.OpenAPI.HEADERS = {
    apikey: token,
  };

  try {
      //SDK API is called
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.createRoom(
        req.params.ac_id,
        req.body
      );
    return res.json({ ...data });
  } catch (err) {
    console.log(err);
    return res.status(err.status).send(err.body);
  }
};


// Get Room record by RoomID API Call
const getRoom = async (req, res) => {
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
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.getRoomRecordByRoomId(
        req.params.ac_id,
        req.params.rm_id
      );

    return res.json({ ...data });
  } catch (err) {
    return res.status(err.status).send(err.body);
  }
};

// Get all Room Deatils API Call
const getAllRoom = async (req, res) => {
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
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.getMultipleRoomRecords(
        req.params.ac_id,
        req.query.RoomName,
        req.query.CreatedAt,
        req.query.ClosedAt,
        req.query.Status,
        req.query.RoomType,
        req.query.Limit,
        req.query.Off_set
      );
    return res.json({ ...data });
  } catch (err) {
    return res.status(err.status).send(err.body);
  }
};


// Delete Room by RoomID API Call
const deleteRoom = async (req, res) => {
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
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.deleteRoom(
        req.params.ac_id,
        req.params.rm_id
      );

    return res.json({ ...data });
  } catch (err) {
    return res.status(err.status).send(err.body);
  }
};


// Join Conference Room API Call
const joinRoom = async (req, res) => {
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
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.joinRoom(
        req.params.ac_id,
        req.params.rm_id,
        req.body
      );

    return res.json({ ...data });
  } catch (err) {
    return res.status(err.status).send(err.body);
  }
};


// Play aannouncement into the Room API Call
const playRoom = async (req, res) => {
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
    const data =
      await ConferenceAPI.MultipartyConferenceCallService.playAnnouncementInRoom(
        req.params.ac_id,
        req.params.rm_id,
        req.body
      );

    return res.json({ ...data });
  } catch (err) {
    return res.status(err.status).send(err.body);
  }
};


// Exporting methods to access in other module
module.exports = {
  playRoom,
  joinRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  createRoom,
};
