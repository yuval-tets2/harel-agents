import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agent" label="agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
