import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Spinner from "reactjs-simple-spinner";
import { Link } from "react-router-dom";
import moment from "moment";

export const Lyric = (props) => {
  const [track, setTrack] = useState({});
  const [lyric, setLyric] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        //upateFetchedData(response.data.message.body.track_list);
        console.log(response.data);
        setLyric(response.data.message.body.lyrics);
        const trackResponse = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
        //upateFetchedData(response.data.message.body.track_list);
        console.log(trackResponse.data);
        setTrack(trackResponse.data.message.body.track);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      {track === undefined ||
      lyric === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyric).length === 0 ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/" className="btn btn-dark mb-3 shadow-sm">
            Back
          </Link>
          <Card className="shadow-lg">
            <Card.Header>
              <span style={{ fontWeight: "700" }}>{track.track_name}</span> by{" "}
              {track.artist_name}
            </Card.Header>
            <Card.Body>
              <Card.Text>{lyric.lyrics_body}</Card.Text>
            </Card.Body>
          </Card>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <span style={{ fontWeight: "700" }}>Album ID: </span>
              {track.album_id}
            </li>
            <li className="list-group-item">
              <span style={{ fontWeight: "700" }}>Track Rating: </span>{" "}
              {track.track_rating}
            </li>
            <li className="list-group-item">
              <span style={{ fontWeight: "700" }}>Explicit Words: </span>
              {track.explicit ? "Yes" : "No"}
            </li>
            <li className="list-group-item">
              <span style={{ fontWeight: "700" }}>First Release Date: </span>
              {moment(track.updated_time).format("MM/DD/YYYY")}
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};
