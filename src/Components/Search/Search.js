import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { GlobalContext } from "../../Context/Globalstate";

export const Search = () => {
  const [trackTile, setTrackTitle] = useState("");
  const { updateSearchResults } = useContext(GlobalContext);

  const getSearchTrack = () => {
    //setTrackTitle(e.target.value);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTile}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) =>
        updateSearchResults({
          tracks: res.data.message.body.track_list,
          heading: "Search Results",
        })
      );
  };
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text className="text-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="display-4">
              <i class="fas fa-music"></i> Search For A Song
            </h1>
            <p className="lead">Get the lyrics for any track</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Song title..."
                onChange={(e) => setTrackTitle(e.target.value)}
                value={trackTile}
              />
            </div>
            <Button className="btn btn-block mt-2" onClick={getSearchTrack}>
              Get Track Lyrics
            </Button>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
