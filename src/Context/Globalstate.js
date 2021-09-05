import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";
import { actionTypes } from "./ActionTypes";

const InitialState = {
  track_list: [],
  heading: "Top 10 Tracks",
};

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const upateFetchedData = (payload) => {
    dispatch({
      type: actionTypes.FETCH_TOP10DATA,
      payload: payload,
    });
  };

  const updateSearchResults = (payload) => {
    dispatch({
      type: actionTypes.SEARCH_DATA,
      payload: payload,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ globalState: state, upateFetchedData, updateSearchResults }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
