import { EventCreateNestedManyWithoutAgentsInput } from "./EventCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutAgentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
