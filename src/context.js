import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

import { SHOW_LOADING, HIDE_LOADING } from "./action";

const initialState = {
  is_loading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value="value">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
