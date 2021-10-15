import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom'

import { useParams } from "react-router";

function SearchResults() {
  const [foundGames, setfoundGames] = useState([]);
  const { id } = useParams();
  const apiURL = `/api/games/find/${id}`;

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

      console.log(gameList);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    renderResults();
  }, []);

  return (
    <div>
      <h2>
        {foundGames.length
            ? `Viewing ${foundGames.length} results:`
            : 'No games found.'}
      </h2>
      <ul>
      {foundGames.map((game) => {
      return (
      <div>
    <Route render={({ history}) => (

              <button onClick={() => { history.push(`/game/${game.game}`) } }>{game.name}</button>
              )} />



  

      </div>

      );
            })}
                    </ul>
    </div>
  );
}

export default SearchResults;
