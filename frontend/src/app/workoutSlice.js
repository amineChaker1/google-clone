import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutSlice = createApi({
  reducerPath: "workout",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/workouts",
  }),
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => " ",
    }),
  }),
});

export const { useGetWorkoutsQuery } = workoutSlice;
