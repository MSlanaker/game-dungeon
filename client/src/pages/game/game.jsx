import React, { useState, useEffect } from "react";
// import {Route} from 'react-router-dom'
import { useParams } from "react-router";

function Game() {
  const [gameData, setgameData] = useState([]);
  const [coverImage, setcoverImage] = useState("");
  const { id } = useParams();
  const apiURL = `/games/${id}`;
  const coverURL = `/games/cover/${id}`;
  const [statusID, setstatusID] = useState([
    "Released",
    "Unknown",
    "Alpha",
    "Beta",
    "Early access",
    "Offline",
    "Cancelled",
    "Rumored",
  ]);

  const renderGameData = async () => {
    try {
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No games found");
      }
      const data = await response.json();
      setgameData(data[0]);

      console.log(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const renderCoverImage = async () => {
    try {
      const response = await fetch(coverURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No Cover found");
      }
      const data = await response.json();
      setcoverImage(data);

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    renderGameData();
    renderCoverImage();
  }, []);

  return (
    <div>
      <div class="card">
        {/* <div class="card-image">
    <figure>
         class="image is-16by9">
      <img src={coverImage.big} alt="Placeholder image"/>
    </figure>
  </div> */}
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-512x512">
                <img src={coverImage.big} alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{gameData.name}</p>

              <p class="subtitle is-6">
                Game Status: {statusID[gameData.status]}
              </p>
              <p class="is-6">Game Status: {gameData.summary}.</p>
              <br />

              <button class="button is-text">Write a Blog</button>
            </div>
          </div>
          <div class="content">
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
