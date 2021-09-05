import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Track = ({ track }) => {
  return (
    <Card className="shadow-lg">
      <Card.Header style={{ fontWeight: "800" }}>
        {track.track.artist_name}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <i className="fas fa-play"></i>{" "}
          <span style={{ fontWeight: "700" }}>Track: </span>
          {track.track.track_name}
        </Card.Text>
        <Card.Text>
          <i className="fa-solid fa-record-vinyl"></i>{" "}
          <span style={{ fontWeight: "700" }}>Album: </span>
          {track.track.album_name}
        </Card.Text>
        {/* <Card.Footer className="bg-dark text-center text-white py-1">
          <i className="fa-solid fa-chevron-right"></i>{" "}
          <Button className="bg-dark btn btn-dark btn-outline-none py-0">
            View Lyrics
          </Button>
        </Card.Footer> */}
        <Link
          to={`/lyrics/track/${track.track.track_id}`}
          className="btn btn-dark btn-block"
          style={{ display: "block" }}
        >
          <i className="fa-solid fa-chevron-right"></i> View Lyrics
        </Link>
      </Card.Body>
    </Card>
  );
};
