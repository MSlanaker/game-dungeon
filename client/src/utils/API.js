import axios from 'axios';

// Get Bearer Key
// // https://id.twitch.tv/oauth2/token?client_id=q16fdhms6ouner5f0cs80ophtd7ldl&client_secret=cq2jyfdk4dbftgj5b0ffpejknqeq73&grant_type=client_credentials
// // process.env.API_CLIENT_ID=q16fdhms6ouner5f0cs80ophtd7ldl
// // process.env.API_SECRET=cq2jyfdk4dbftgj5b0ffpejknqeq73

// const { API_CLIENT_ID, API_SECRET } = process.env;
// const authURL = `https://id.twitch.tv/oauth2/token?client_id=${API_CLIENT_ID}&client_secret=${API_SECRET}&grant_type=client_credentials`;

const authURL = "https://id.twitch.tv/oauth2/token?client_id=q16fdhms6ouner5f0cs80ophtd7ldl&client_secret=cq2jyfdk4dbftgj5b0ffpejknqeq73&grant_type=client_credentials";



export const APInewAuth = () => {
    axios({
    method: 'POST',
    url: authURL
})
// Axios
.then(response=>console.log(response.data))
.catch(error=>console.log(error))
};



// Get Search Data

const dataURL = "https://api.igdb.com/v4/search";
// let searchText = `search Call of Duty`;
const searchData = {
    url: dataURL,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': 'q16fdhms6ouner5f0cs80ophtd7ldl',
        'Authorization': 'Bearer g9plrm93slj1upiyso4t12hnf707hh'},
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






