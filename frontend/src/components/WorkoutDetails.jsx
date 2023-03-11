import React, { useState } from "react";
import { useGetWorkoutsQuery } from "../app/workoutSlice";
import "./workoutDetails.css";
const WorkoutDetails = () => {
  const { data } = useGetWorkoutsQuery();
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
        </div>
      ))}
    </div>
  );
};

export default WorkoutDetails;
