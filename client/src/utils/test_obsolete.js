// To test API Calls

import API from './API.js';


// const test = await API.newAuth();
// console.log(test.access_token);
// console.log(test.expires_in);
// console.log(test.token_type);

// Send the search string
const test2 = await API.findGame("Metroid");
console.log(test2);

const test3 = await API.searchImage(1942);
console.log(test3);

const test1 = await API.gameData(1942);
console.log(test1);

