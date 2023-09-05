import React, { useState, ChangeEvent, FormEvent } from "react";

const AddTimeForm: React.FC = () => {
  const [training, setTraining] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [capacity, setCapacity] = useState<number | undefined>(undefined);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (training && time && capacity !== undefined) {
      console.log(training + " " + time + " " + capacity);
      // Reset the form fields
      setTraining("");
      setTime("");
      setCapacity(undefined);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
