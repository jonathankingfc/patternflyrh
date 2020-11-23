import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import { SessionContext } from './Contexts/SessionContext';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <SessionContext.Provider value={{ loggedIn: true, configYAML: {}, certificates: {}, readOnlyFieldGroups: [''] }}>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </SessionContext.Provider>
    </Router>
  );
};

export { App };
