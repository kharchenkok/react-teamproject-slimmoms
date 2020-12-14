import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"

import loaderSlice from "./loaderSlice";
import currentDateInfoSlice from "./currentDateInfoSlice";
import errorRequestSlice from "./errorRequestSlice";
import tokinSlice from './tokinSlice'
import userSlice from './userSlice'
import DailyCaloriesFormInfoSlice from './DailyCaloriesFormInfoSlice'



const dateInfoPersistConfig = {
  key: 'currentDate',
  version: 1,
  storage,
  whitelist: ['currentDate']
}


const rootReducer = combineReducers({
  loader: loaderSlice,
  currentDateInfo: persistReducer(dateInfoPersistConfig, currentDateInfoSlice),
  errorRequest: errorRequestSlice,
  token: tokinSlice,
  user: userSlice,
  DailyCaloriesFormInfo: DailyCaloriesFormInfoSlice,

});

export default rootReducer;
