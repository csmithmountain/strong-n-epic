import React, { useState, ChangeEvent, FormEvent } from "react";
import { Workout } from "../types/interface";

interface AddTimeFormprop {
  trainingData: Workout[];
  newAddWorkout: (newAddWorkout: Workout) => void; // Callback function for delete
}

const AddTimeForm: React.FC<AddTimeFormprop> = ({
  newAddWorkout,
  trainingData,
}) => {
  const [training, setTraining] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [capacity, setCapacity] = useState<number | undefined>(undefined);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (training && time && capacity !== undefined) {
      const maxId = Math.max(...trainingData.map((workout) => workout.id), 0);
      const newTrainingSession: Workout = {
        id: maxId + 1,
        training: training,
        time: time,
        capacity: capacity || 0, // Make sure it's not undefined
        participants: [],
      };
      newAddWorkout(newTrainingSession);
      // Reset the form fields
      setTraining("");
      setTime("");
      setCapacity(undefined);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit} className="admin-page-form">
        <label htmlFor="training">Training:</label>
        <input
          type="text"
          id="training"
          value={training}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTraining(e.target.value)
          }
        />
        <label htmlFor="time">Time:</label>
        <input
          type="datetime-local"
          id="time"
          value={time}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
        />
        <label htmlFor="capacity">Capacity:</label>
        <input
          type="number"
          id="capacity"
          min="1"
          value={capacity || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCapacity(Number(e.target.value) || undefined)
          }
        />
        <button type="submit" value="Submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTimeForm;
