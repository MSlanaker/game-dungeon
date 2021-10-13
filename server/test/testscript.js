let authBtn = $("#authBtn");
let dataBtn = $("#dataBtn");
let gameBtn = $("#gameBtn");
let coverBtn = $("#coverBtn");
let textBox = $("#textBox").val();

// Test Data
const testData = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/games/1942`, {
    method: "GET",
  });

  if (response.ok) {
    let [json] = await response.json();

    console.log("data");
    console.log(json.name);
  } else {
    alert("Error");
  }
};

// Test Auth
const testAuth = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/accesstoken/`, {
      method: "GET",
    });
  
    if (response.ok) {
      let [json] = await response.json();
  
      console.log("Auth");
      console.log(json.name);
    } else {
      alert("Error");
    }
  };


  // Test Search
const testgame = async (event) => {
  event.preventDefault();
  let textBox = $("#textBox").val();
const uri = textBox;
const encoded = encodeURI(uri);

let apiURL = `/api/games/find/${encoded}`


  const response = await fetch(apiURL, {
    method: "GET",
  });

  if (response.ok) {
    let json = await response.json();

    console.log("Auth");
    console.log(json);
  } else {
    alert("Error");
  }
};


  // Test Cover
  const testCover = async (event) => {
    event.preventDefault();
    let textBox = $("#textBox").val();
  const urlId = parseInt(textBox);
  
  let apiURL = `/api/games/cover/${urlId}`
  
  
    const response = await fetch(apiURL, {
      method: "GET",
    });
  
    if (response.ok) {
      let json = await response.json();
  
      console.log(json);
    } else {
      alert("Error");
    }
  };





  authBtn.on("click", testAuth);
  dataBtn.on("click", testData);
  gameBtn.on("click", testgame);
  coverBtn.on("click", testCover);

