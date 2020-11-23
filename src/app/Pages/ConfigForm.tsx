import * as React from 'react';
import { PageSection, Text, TextContent, Divider, PageSectionVariants, Form, FormGroup } from '@patternfly/react-core';

import BasicConfiguration from '../FormGroups/BasicConfiguration';

const ConfigFormPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Red Hat Quay Configuration</Text>
          <Text component="p">
            Here you can reconfigure your Quay deployment. Your settings will be validated
            <br />
            before a new config.tar.gz file is provided.
          </Text>
        </TextContent>
      </PageSection>
      <Divider component="div" />

      <PageSection padding={{ default: 'padding' }}></PageSection>
    </React.Fragment>
  );
};

export { ConfigFormPage };
