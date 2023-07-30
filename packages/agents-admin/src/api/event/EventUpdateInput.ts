import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type EventUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
