import { createContext } from 'react';

interface Session {
  loggedIn: boolean;
  configYAML: Object;
  certificates: Object;
  readOnlyFieldGroups: Array<string>;
}

export const SessionContext = createContext<Session>({
  loggedIn: false,
  configYAML: {},
  certificates: {},
  readOnlyFieldGroups: [''],
});
