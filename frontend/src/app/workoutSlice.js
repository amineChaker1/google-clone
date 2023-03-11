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
    postWorkout: builder.mutation({
      query: (data) => ({
        url: " ",
        method: "POST",
        body: data,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (data) => ({
        url: `/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  usePostWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutSlice;
