import { combineReducers } from "redux";
import notesReducers from "./notesReducers";
import signupReducers from "./signupReducers"; // Make sure to import signupReducers

const rootReducer = combineReducers({
  notes: notesReducers,
  signup: signupReducers
});

export default rootReducer;
