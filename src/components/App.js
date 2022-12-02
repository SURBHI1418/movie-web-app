import React from "react";
import {data} from "../data";
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import index from "../index.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourite</div>
        </div>
        <div className="list">
          {data.map(movie=>(
            <MovieCard movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;