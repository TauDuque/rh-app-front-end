import { SHOW_LOADING, HIDE_LOADING, SHOW_EXTRA, HIDE_EXTRA } from "./action";

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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
