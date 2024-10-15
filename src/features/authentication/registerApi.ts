import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RegisterUser, RegisterUserApiResponse } from "../../types";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mentoons-backend-zlx3.onrender.com/api/v1/admin",
    // baseUrl: "http://localhost:4000/api/v1/admin",
  }),
  //   tagTypes: [""],
  endpoints: (builder) => ({
    registerData: builder.mutation<RegisterUserApiResponse, RegisterUser>({
      query: (userData) => ({
        url: "/sign-in",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterDataMutation } = authApiSlice;
