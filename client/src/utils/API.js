import axios from "axios";

// const { API_CLIENT_ID, API_SECRET } = process.env;

// Need to fill
const API_CLIENT_ID = "";
const API_SECRET = "";
const API_AUTH = "";

const authURL = `https://id.twitch.tv/oauth2/token?client_id=${API_CLIENT_ID}&client_secret=${API_SECRET}&grant_type=client_credentials`;
const searchURL = "https://api.igdb.com/v4/search";
const imgURL = "https://api.igdb.com/v4/screenshots";
const dataURL = "https://api.igdb.com/v4/games/";
// const gameID = 1942;
// const searchText = `Call of Duty`;

const API = {
  async newAuth() {
  // const APInewAuth = await
  let res;
  try{
  res = await axios({
      method: 'POST',
      url: authURL});
      console.log(res.data);
  }catch (err) {
      console.log(err)
    }
  return res.data;
  },



  // Game Search Data
  async findGame(searchtxt) {
    let res;
    const searchData = {
      method: "POST",
      url: searchURL,
      headers: {
        Accept: "application/json",
        "Client-ID": `${API_CLIENT_ID}`,
        Authorization: `Bearer ${API_AUTH}`,
      },
      data: `fields id, name; search "${searchtxt}"; limit 100;`,
    };
    // console.log(searchData);
    try {
      res = await axios(searchData);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
    return res.data;
  },

  // Search Image
  async searchImage(gameID) {
    let res;
    const imageSearchData = {
      url: imgURL,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${API_CLIENT_ID}`,
        Authorization: `Bearer ${API_AUTH}`,
      },
      data: `fields *; where game = ${gameID};`,
    };
    try {
      res = await axios(imageSearchData);
    } catch (err) {
      console.log(err);
    }
    return res.data;
  },

  // // Search all data from a game
  async gameData(gameID) {
    let res;

      const searchData = {
          url: dataURL,
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Client-ID': `${API_CLIENT_ID}`,
              'Authorization': `Bearer ${API_AUTH}`},
              data: `fields *; where id = ${gameID};`,
          };

          try {
            res = await axios(searchData);
          } catch (err) {
            console.log(err);
          }
          return res.data;
        },
};

export default API;
