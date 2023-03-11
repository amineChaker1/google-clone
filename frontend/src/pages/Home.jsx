import React, { useEffect, useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";

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
      <div className="workouts  p-5 lg:p-28">
        <WorkoutDetails />
      </div>
    </div>
  );
};

export default Home;
