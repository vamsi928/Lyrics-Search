import React from "react";
import { Tracks } from "../tracks/Tracks";
import { Search } from "../Search/Search";

export const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};
