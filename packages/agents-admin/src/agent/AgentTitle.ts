import { Agent as TAgent } from "../api/agent/Agent";

export const AGENT_TITLE_FIELD = "firstName";

export const AgentTitle = (record: TAgent): string => {
  return record.firstName || String(record.id);
};
