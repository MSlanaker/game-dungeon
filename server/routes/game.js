const axios = require("axios");
// const API = require("../../utils/API");
// require('dotenv').config();
const router = require("express").Router();

const API_CLIENT_ID = "q16fdhms6ouner5f0cs80ophtd7ldl";
const API_SECRET = "cq2jyfdk4dbftgj5b0ffpejknqeq73";
const API_AUTH = "t0eoe80zf8iqf5ovn0pk6bp76oe2sw";

const authURL = `https://id.twitch.tv/oauth2/token?client_id=${API_CLIENT_ID}&client_secret=${API_SECRET}&grant_type=client_credentials`;
const searchURL = "https://api.igdb.com/v4/search";
const imgURL = "https://api.igdb.com/v4/screenshots";
const dataURL = "https://api.igdb.com/v4/games/";
const coverURL = "https://api.igdb.com/v4/covers";

// Get auth data
router.get("/accesstoken", async (req, res) => {
  console.log("test");
  const searchData = {
    url: authURL,
    method: "POST",
  };
  try {
    const response = await axios(searchData);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get specific game data
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const gameID = parseInt(req.params.id);
  console.log(gameID);

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

    // console.log(response.data);

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////////////////// Get search for a game///////////////////////////
// Need at front end
// const uri = 'call of duty';
// const encoded = encodeURI(uri);

router.get("/find/:keyword", async (req, res) => {
  console.log(req.params.keyword);
  const searchData = {
    method: "POST",
    url: searchURL,
    headers: {
      Accept: "application/json",
      "Client-ID": `${API_CLIENT_ID}`,
      Authorization: `Bearer ${API_AUTH}`,
    },
    data: `fields name, game; search "${req.params.keyword}"; where game != null; limit 200;`,
    // game is the game id
  };

  try {
    const response = await axios(searchData);

    // console.log(response.data);

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////////// Get Cover data//////////////////////////////
// Image info
// logo_med	284 x 160	Fit
// screenshot_big	889 x 500	Lfill, Center gravity
// https://images.igdb.com/igdb/image/upload/t_{size}/{hash}.jpg

router.get("/cover/:id", async (req, res) => {
  console.log(req.params.id);
  const gameID = parseInt(req.params.id);
  console.log(gameID);

  const imageSearchData = {
    url: coverURL,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": `${API_CLIENT_ID}`,
      Authorization: `Bearer ${API_AUTH}`,
    },
    data: `fields *; where game = ${gameID};`,
  };

  try {
    const response = await axios(imageSearchData);
    const [coverRaw] = response.data;
    const cover = {
      big: `//images.igdb.com/igdb/image/upload/t_cover_big/${coverRaw.image_id}.jpg`,
      med: `//images.igdb.com/igdb/image/upload/t_logo_med/${coverRaw.image_id}.jpg`,
    };

    console.log(cover.big);
    console.log(cover.med);
    res.status(200).json(cover);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
