import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_EXTRA,
  HIDE_EXTRA,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_SINGLE_DATA_START,
  GET_SINGLE_DATA_SUCCESS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === SHOW_EXTRA) {
    return { ...state, extra_menus: true };
  }

  if (action.type === HIDE_EXTRA) {
    return { ...state, extra_menus: false };
  }

  if (action.type === SHOW_LOADING) {
    return { ...state, is_loading: true };
  }

  if (action.type === HIDE_LOADING) {
    return { ...state, is_loading: false };
  }

  if (action.type === GET_DATA_START) {
    return state;
  }

  if (action.type === GET_DATA_SUCCESS) {
    return { ...state, funcionarios: action.payload };
  }

  if (action.type === GET_SINGLE_DATA_START) {
    return state;
  }

  if (action.type === GET_SINGLE_DATA_SUCCESS) {
    return { ...state, funcionario: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
