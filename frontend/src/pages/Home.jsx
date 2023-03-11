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
      <div className="workouts grid grid-cols-4  p-5 md:pl-3 lg:p-28 lg:pl-10">
        <div className=" col-span-3 px-12">
          <WorkoutDetails />
        </div>
        <div className=" col-span-1">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
