import { Agent } from "../agent/Agent";

export type Event = {
  agent?: Agent | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
