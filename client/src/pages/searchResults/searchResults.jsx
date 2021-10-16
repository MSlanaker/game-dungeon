import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { useParams } from "react-router";

function SearchResults() {
  const [foundGames, setfoundGames] = useState([]);
  const { id } = useParams();
  const apiURL = `/games/find/${id}`;

  useEffect(() => {
    const renderResults = async () => {
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
        const gameList = await response.json();
        setfoundGames(gameList);
      } catch (err) {
        console.error(err);
      }
    };

    renderResults();
  }, []);

  if (id) {
    return (
      <div class="columns is-centered">
        <div class="column is-11">
          <h1 class="title">
            {id ? `Results for ${id}` : `Search field was empty.`}{" "}
          </h1>

          <h2 class="subtitle">
            {foundGames.length
              ? `Viewing ${foundGames.length} results:`
              : "No games found."}
          </h2>
          <ul>
            {foundGames.map((game) => {
              return (
                <div>
                  <Route
                    render={({ history }) => (
                      <button
                        class="button is-ghost is-large"
                        onClick={() => {
                          history.push(`/game/${game.game}`);
                        }}
                      >
                        {game.name}
                      </button>
                    )}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <h1 class="title">Search field was empty.</h1>;
  }
}
export default SearchResults;
