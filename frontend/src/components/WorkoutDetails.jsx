import React, { useEffect, useState } from "react";
import {
  useDeleteWorkoutMutation,
  useGetWorkoutsQuery,
} from "../app/workoutSlice";

const WorkoutDetails = () => {
  const { data } = useGetWorkoutsQuery();
  const [deleteworkout, res] = useDeleteWorkoutMutation();
  const query = useGetWorkoutsQuery();
  useEffect(() => {
    query.refetch();
  }, [res.isLoading]);
  return (
    <div>
      {data?.map((workout) => (
        <div
          className="text-white workout-details border-2 border-pred mb-3 p-2 rounded-md "
          key={workout._id}
        >
          <h4 className="text-2xl text-pred font-bold mb-2">
            {" "}
            {workout.title}{" "}
          </h4>
          <p>
            {" "}
            <span className="font-semibold">Load (Kg) : </span> {workout.load}{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Reps : </span> {workout.reps}{" "}
          </p>

          <p> {workout.createdAt} </p>

          <span
            className="hover:cursor-pointer"
            onClick={() => deleteworkout(workout._id)}
          >
            delete
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorkoutDetails;
