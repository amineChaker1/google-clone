import React, { useEffect, useState } from "react";
import {
  useGetWorkoutsQuery,
  usePostWorkoutMutation,
} from "../app/workoutSlice";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [addworkoutmutation, res] = usePostWorkoutMutation();
  const query = useGetWorkoutsQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    addworkoutmutation(workout);
    setTitle("");
    setReps("");
    setLoad("");
  };
  useEffect(() => {
    query.refetch();
  }, [res.isLoading]);

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-pred mb-2 text-2xl font-bold">Add a New Workout</h3>
      <label className="text-white "> Workout Title: </label>
      <input
        className="block my-3 w-full p-1 rounded-sm border-none focus:outline-0"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="text-white "> Load (Kg): </label>
      <input
        className="block my-3 w-full p-1 rounded-sm border-none focus:outline-0"
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <label className="text-white "> Reps: </label>
      <input
        className="block my-3 w-full p-1 rounded-sm border-none focus:outline-0"
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button
        className="text-white py-1 px-3 rounded-md bg-pred "
        type="submit"
      >
        Add Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
