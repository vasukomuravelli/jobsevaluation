import { combineReducers, createStore } from "redux";
import { reducer as AdminReducer } from "./admin/reducer";
import { reducer as ClientReducer } from "./client/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";

const RootReducer = combineReducers({
  AdminState: AdminReducer,
  ClientState: ClientReducer,
  AuthState: AuthReducer,
});

export const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
