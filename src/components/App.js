import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projectlist from "./Projectlist";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <Projectlist projects={user.projects} />
    </div>
  );
}

export default App;