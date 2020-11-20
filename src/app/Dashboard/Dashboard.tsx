import * as React from 'react';
import {
  PageSection,
  ActionGroup,
  Button,
  Text,
  TextContent,
  Divider,
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  PageSectionVariants,
  Card,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';

import BasicConfiguration from '../FormGroups/BasicConfiguration';
import { useForm } from 'react-hook-form';

const Dashboard: React.FunctionComponent = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
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

      <PageSection padding={{ default: 'padding' }}>
        <form className="pf-c-form" onSubmit={handleSubmit(onSubmit)}>
          <BasicConfiguration register={register} />
          <input type="submit" />
        </form>
      </PageSection>
    </React.Fragment>
  );
};

export { Dashboard };
