import { User } from './User';

export type Message = {
  message: string;
  from: User;
  to: User;
  value: number;
  date: Date;
};
