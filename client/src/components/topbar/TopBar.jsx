import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { Route } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [gamename, setgamename] = useState("");

  const handleChange = (event) => {
    const { target } = event;

    setgamename(target.value);
  };

  const loadGamePage = () => {
    setgamename("");
  };

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
          <li className="topListItem" onClick={handleLogout}>
            {" "}
            {user && "LOGOUT"}
          </li>
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
class="input" type="text" 
          id="textBox"
          placeholder="Find a Game"
          value={gamename}
          onChange={handleChange}
        />

        <Route
          render={({ history }) => (
            <button class="button is-light"
              type="button"
              id="findBtn"
              onClick={() => {
                if (gamename) {history.push(`/find/${gamename}`);
                loadGamePage();}
              }}
            >
              Go!
            </button>
          )}
        />
      </div>
    </div>
  );
}
