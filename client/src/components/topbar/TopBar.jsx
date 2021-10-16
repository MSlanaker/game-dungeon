import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import {Route} from 'react-router-dom'
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type:"LOGOUT" });
  }
  const [gamename, setgamename] = useState("");

  const handleChange = (event) => {
    const { target } = event;

    setgamename(target.value);
  };

  const loadGamePage = () => {
    setgamename("");
  };






// Move to game page//

  // const findGame = async (event) => {
  //   event.preventDefault();

  //   alert(gamename);
  //   setgamename("");

  //   // Search

  //   const uri = gamename;
  //   const encoded = encodeURI(uri);

  //   let apiURL = `/api/games/find/${encoded}`;

  //   const response = await fetch(apiURL, {
  //     method: "GET",
  //     headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //   });

  //   if (response.ok) {
  //     let json = await response.json();

  //     console.log("Auth");
  //     console.log(json);
      
  //   } else {
  //     alert("Error");
  //   }
  // };
// Move to game page



  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">ABOUT</li> */}
          {/* we dont need this line */}
          {/* <li className="topListItem">CONTACT</li> */}
          {/* or this line, for that matter */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
       {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://cdn2.iconfinder.com/data/icons/game-streaming-4/60/Gamer-Profile-gaming-avatar-user-person-male-512.png"
              alt=""
            />
          </Link>
       ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
       )}
        <i className="topSearchIcon fas fa-search"></i>
        {/* Added Find a Game */}
        {/* <h3>Find a Game:</h3> */}
        <input
          type="text"
          id="textBox"
          placeholder="Find a Game"
          value={gamename}
          onChange={handleChange}
        />

<Route render={({ history}) => (
        <button type="button" id="findBtn" onClick={() => { history.push(`/find/${gamename}`); loadGamePage() } }>

          Find a Game
        </button>
)} />


      </div>
    </div>
  );
}
