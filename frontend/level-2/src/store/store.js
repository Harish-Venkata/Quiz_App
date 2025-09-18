import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import questionsReducer from "./slices/questionSlice.js";
import resultReducer from "./slices/resultSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questions: questionsReducer,
    result: resultReducer,
  },
});

export default store;
