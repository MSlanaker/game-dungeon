import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom'
import { useParams } from "react-router";
import axios from "axios";

function Game() {
  const [gameData, setgameData] = useState([]);
  const [coverImage, setcoverImage] = useState("");
  const [posts, setPosts] = useState([]);
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




  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/blogs/game/${id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);





  return (
    <div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-512x512">
                <img src={coverImage.big} alt={gameData.name} />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">{gameData.name}</p>

              <p class="subtitle is-6">
                Game Status: {statusID[gameData.status]}
              </p>
              <p class="is-6">Game Status: {gameData.summary}.</p>
              <br />

              <button class="button is-text">Write a Blog</button>
            </div>
          </div>
          <div class="content">
          <p class="title is-4">Blogs about this game:{gameData.length}</p>


          {posts.map((post) => {
          return (
            <div class="card">
              <Route
                render={({ history }) => (
                    <div class="card-content">
                    <p class="title is-5">{post.blogtitle}</p>
                    <p class="subtitle is-6">By: {post.username}</p>

                  <button

                    class="button is-text"
                    onClick={() => {
                      history.push(`/post/${post._id}`);
                    }}
                  >Read Blog
                  </button>
                  </div>
                )}
              />
            </div>
          );
        })}


            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
