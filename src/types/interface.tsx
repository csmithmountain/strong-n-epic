export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  bookings: number[];
}


export interface Workout {
  id: number;
  training: string;
  time: string;
  capacity: number;
  participants: string[];
}

export interface Data {
  Users: User[];
  TrainingSessions: Workout[];
}

