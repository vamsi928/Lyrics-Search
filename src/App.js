import "./App.css";
//import { Button, Nav } from "react-bootstrap";
import { Navbar } from "./Components/Layout/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { Index } from "./Components/Layout/Index";
import { useContext } from "react";
import { GlobalContext } from "./Context/Globalstate";
import axios from "axios";
import { Lyric } from "./Components/tracks/Lyric";

function App() {
  const { upateFetchedData } = useContext(GlobalContext);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=16&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      );
      upateFetchedData(response.data.message.body.track_list);
    }
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container mx-auto px-5">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyric} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
