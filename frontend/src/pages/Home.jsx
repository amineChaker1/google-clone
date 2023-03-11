import React, { useEffect, useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  /* ;
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/workouts");
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setWorkouts(json);
      }
      fetchWorkouts();
    };
  }, [workouts]);*/

  return (
    <div>
      <div className="workouts flex  flex-col-reverse  md:justify-evenly p-3 md:flex-row   ">
        <div className=" mt-5 md:w-4/6 md:max-w-6xl ">
          <WorkoutDetails />
        </div>
        <div className="mt-5 ">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
