import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Globalstate";
import Spinner from "reactjs-simple-spinner";
import { Track } from "./Track";

export const Tracks = () => {
  const {
    globalState: { track_list, heading },
  } = useContext(GlobalContext);
  console.log(track_list);
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
  };
  return (
    <div>
      {track_list.length === 0 || track_list === undefined ? (
        <Spinner size="large" message="Loading..." />
      ) : (
        <React.Fragment>
          <h3 className="text-center mb-4">{heading}</h3>
          <div style={style}>
            {track_list.map((track, i) => (
              <Track track={track} key={i} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
