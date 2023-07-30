import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type EventCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  date?: Date | null;
  name?: string | null;
};
