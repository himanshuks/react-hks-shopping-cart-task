import { DISPLAY_ITEMS, DELETE_ITEMS, EDIT_ITEM } from "./types";

import ItemData from "../data/data";

export const getItems = () => dispatch => {
  dispatch({
    type: DISPLAY_ITEMS,
    payload: ItemData
  });
};

export const deleteItem = id => dispatch => {
  dispatch({
    type: DELETE_ITEMS,
    payload: id
  });
};

export const editItem = id => dispatch => {
  console.log("id received is" + id);
  dispatch({
    type: EDIT_ITEM,
    payload: id
  });
};
