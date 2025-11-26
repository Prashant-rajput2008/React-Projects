import React from "react";
import "./App.css";
import FlipCard from "./flipcard";

function App() {
  return (
    <div className="App">
      <FlipCard 
        frontContent={<h2>Guess What </h2>}
        backContent={<p><img className="image" src="https://i.pinimg.com/236x/fa/25/06/fa25068c8bb1e678f80477b0e059883b.jpg" alt="Yorichi" /></p>}
      />
      <FlipCard
        frontContent={<h2>is This</h2>}
        backContent={<p><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIkJUw80lmB_Zue-Ihm8tFqWaX11zWKxe_Q&s" alt="Black Goku" /></p>}
      />
    </div>
  );
}

export default App;
