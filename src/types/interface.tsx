export interface User {
  username: string;
  password: string;
  role: string;
}

export interface Workout {
  name: string;
  time: string;
  capacity: number;
  participants: string[];
}
