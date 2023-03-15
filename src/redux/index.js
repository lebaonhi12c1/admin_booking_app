import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userreducer from "./reducer/userSlice";
const persistconfig = {
    key: 'root',
    storage,
    whiteList: ['user']
}
const reducer = combineReducers({
    theme: themeReducer,
    user: userreducer,
})
const persistedreducer = persistReducer(persistconfig,reducer)
const store = configureStore(
   {
        reducer:{
            persistedreducer
        }
        ,
        middleware: getDefaultMiddleware =>getDefaultMiddleware({serializableCheck: false})
    }
)
const persistor = persistStore(store)
export {store,persistor}