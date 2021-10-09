import axios from 'axios';

const API_CLIENT_ID="";
const API_SECRET="";
const API_AUTH="";

const authURL = `https://id.twitch.tv/oauth2/token?client_id=${API_CLIENT_ID}&client_secret=${API_SECRET}&grant_type=client_credentials`;






export const APInewAuth = () => {
    axios({
    method: 'POST',
    url: authURL
})
// Axios
.then(response=>console.log(response.data))
.catch(error=>console.log(error))
};



// Game Search Data

const dataURL = "https://api.igdb.com/v4/search";
// let searchText = `search Call of Duty`;
const searchData = {
    url: dataURL,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': `${API_CLIENT_ID}`,
        'Authorization': `Bearer ${API_AUTH}`},
    data: 'fields id, name; search "Zelda"; limit 25;',
};
// console.log(authData);

export const APIsearchGame = () => {
axios(searchData)
.then((res)=>{
    // console.log(res.data);
    let test = res.data;
    console.log(test);

})
.catch(error=>console.log(error))

};

export const APIsearchScreenshot = () =>{
    const searchData = {
        url: "https://api.igdb.com/v4/screenshots",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': `${API_CLIENT_ID}`,
            'Authorization': `Bearer ${API_AUTH}`},
            data: "fields *; where game = 12018976;"
        };
    axios(searchData)
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });



};









  APIsearchScreenshot();

// APIsearchGame();


