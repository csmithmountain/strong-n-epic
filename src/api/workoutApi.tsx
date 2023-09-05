import type { Workout } from "../types/interface";

class WorkoutApi {
  getWorkout(): Promise<Workout[]> {
    const workout: Workout[] = [
      {
        name: "Yoga",
        time: "2023-10-24, 08:00",
        capacity: 10,
        participants: [],
      },
    ];
    return Promise.resolve(workout);
  }
}

export const workoutApi = new WorkoutApi();
