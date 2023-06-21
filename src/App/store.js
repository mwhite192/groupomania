import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./Features/User/userSlice";
import { profileSlice } from "./Features/Profile/profileSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";

export const persistConfig = {
  key: 'root',
  storage,
};

export const reducers = combineReducers({
  user: userSlice.reducer,
  profile: profileSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});
setupListeners(store.dispatch)

export default store;
