import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import React from "react";
import Anime from "./Anime";
import Movies from "./Movies";
import Sports from "./Sports";

export default function Categories() {
  function content() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let History = useHistory();
    const clickAnimeHandler = () => History.push("./Anime");
    const clickSportsHandler = () => History.push("./Sports");
    const clickMoviesHandler = () => History.push("./Movies");

    const data = JSON.stringify(localStorage.getItem("user"));
    const name = data.replace('"','');
    const username = name.replace('"','');
    return (
      <div>
        <h1>Make Your Pick Category {username}</h1>
        <button onClick={clickAnimeHandler}>Anime</button>
        <button onClick={clickMoviesHandler}>Movies</button>
        <button onClick={clickSportsHandler}>Sports</button>
      </div>
    );
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Anime" exact component={Anime} />
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Sports" exact component={Sports} />
          <Route path="/" component={content} />
        </Switch>
      </Router>
    </>
  );
}
