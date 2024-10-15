import { configureStore } from "@reduxjs/toolkit";
import { careerApiSlice } from "../features/career/careerApi";
import { dashboardApiSlice } from "../features/dashboard/dashboardApi";
import { workshopApiSlice } from "../features/workshop/workshopApi";
import { authApiSlice } from "../features/authentication/registerApi";

const store = configureStore({
  reducer: {
    [careerApiSlice.reducerPath]: careerApiSlice.reducer,
    [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
    [workshopApiSlice.reducerPath]: workshopApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      careerApiSlice.middleware,
      dashboardApiSlice.middleware,
      workshopApiSlice.middleware,
      authApiSlice.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
