import { EventUpdateManyWithoutAgentsInput } from "./EventUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutAgentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
