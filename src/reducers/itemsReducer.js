import { DISPLAY_ITEMS, DELETE_ITEMS, EDIT_ITEMS } from "../actions/types";
import Items from "../data/data.json";

const initialState = {
  items: Items,
  selectedItem: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.p_id !== action.payload)
      };
    case EDIT_ITEMS:
      return {
        ...state,
        selectedItem: state.items.filter(item => item.p_id === action.payload)
      };
    default:
      return state;
  }
}
