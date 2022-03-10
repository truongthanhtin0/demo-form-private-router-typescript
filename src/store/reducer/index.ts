import { combineReducers } from "redux";
import accountReducer from "./account_reducer";

const rootReducer = combineReducers({
  accountReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
