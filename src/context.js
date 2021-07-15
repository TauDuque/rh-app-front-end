import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

import { SHOW_LOADING, HIDE_LOADING, SHOW_EXTRA, HIDE_EXTRA } from "./action";

const initialState = {
  is_loading: false,
  extra_menus: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showExtra = () => {
    dispatch({ type: SHOW_EXTRA });
  };

  const hideExtra = () => {
    dispatch({ type: HIDE_EXTRA });
  };

  const showLoading = () => {
    dispatch({ type: SHOW_LOADING });
  };

  const hideLoading = () => {
    dispatch({ type: HIDE_LOADING });
  };

  const api = axios.create({
    baseURL: "http://localhost:3306",
  });

  console.log(api);

  return (
    <AppContext.Provider value={{ ...state, showExtra, hideExtra }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
