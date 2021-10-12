const axios = require("axios");
// const API = require("../../utils/API");
// require('dotenv').config();
const router = require("express").Router();

const API_CLIENT_ID = "q16fdhms6ouner5f0cs80ophtd7ldl";
const API_SECRET = "cq2jyfdk4dbftgj5b0ffpejknqeq73";
const API_AUTH = "rard4bitmzkdrb8esthyjbroddtklz";

const authURL = `https://id.twitch.tv/oauth2/token?client_id=${API_CLIENT_ID}&client_secret=${API_SECRET}&grant_type=client_credentials`;
const searchURL = "https://api.igdb.com/v4/search";
const imgURL = "https://api.igdb.com/v4/screenshots";
const dataURL = "https://api.igdb.com/v4/games/";

// Get auth data
// Get search for a game
// Get image data
router.get("/", async (req, res) => {
  res.json("RT");
});

// Get specific game data

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const gameID = parseInt(req.params.id);

  const searchData = {
    url: dataURL,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": `${API_CLIENT_ID}`,
      Authorization: `Bearer ${API_AUTH}`,
    },
    data: `fields *; where id = ${gameID};`,
  };

  try {
    const response = await axios(searchData);

    console.log(response.data);

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
