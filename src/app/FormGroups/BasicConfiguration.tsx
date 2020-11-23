import * as React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { SessionContext } from '@app/Contexts/SessionContext';
import {
  TextInput,
  TextArea,
  FormSelect,
  FormSelectOption,
  Checkbox,
  ActionGroup,
  Form,
  FormGroup,
  Button,
} from '@patternfly/react-core';

const BasicConfiguration: React.FunctionComponent = () => {
  const session = React.useContext(SessionContext);

  const options = [
    { value: 'please choose', label: 'Please Choose', disabled: false },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false },
  ];
  return (
    <React.Fragment>
      <Card>
        <CardTitle>
          <FontAwesomeIcon icon={faCogs} /> Basic Configuration
        </CardTitle>
        <CardBody>
          return (
          <Form isHorizontal>
            <FormGroup
              label="Name"
              isRequired
              fieldId="horizontal-form-name"
              helperText="Please provide your full name"
            >
              <TextInput
                value={session.configYAML['name']}
                isRequired
                type="text"
                id="horizontal-form-name"
                aria-describedby="horizontal-form-name-helper"
                name="horizontal-form-name"
                onChange={}
              />
            </FormGroup>
            <FormGroup label="Email" isRequired fieldId="horizontal-form-email">
              <TextInput
                value={session.configYAML['email']}
                onChange={this.handleTextInputChange2}
                isRequired
                type="email"
                id="horizontal-form-email"
                name="horizontal-form-email"
              />
            </FormGroup>
            <FormGroup label="Your title" fieldId="horizontal-form-title">
              <FormSelect
                value={session.configYAML['title']}
                onChange={this.onChange}
                id="horzontal-form-title"
                name="horizontal-form-title"
                aria-label="Your title"
              >
                {options.map((option, index) => (
                  <FormSelectOption
                    isDisabled={option.disabled}
                    key={index}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </FormSelect>
            </FormGroup>
            <FormGroup label="Your experience" fieldId="horizontal-form-exp">
              <TextArea
                value={session.configYAML['experience']}
                onChange={this.handleTextInputChange3}
                name="horizontal-form-exp"
                id="horizontal-form-exp"
              />
            </FormGroup>
            {/* <FormGroup>
              <Checkbox label="Follow up via email" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
            </FormGroup>
            <FormGroup>
              <Checkbox label="Remember my password for 30 days" id="alt-form-checkbox-2" name="alt-form-checkbox-2" />
            </FormGroup> */}
            <ActionGroup>
              <Button variant="primary">Submit form</Button>
              <Button variant="link">Cancel</Button>
            </ActionGroup>
          </Form>
          );
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default BasicConfiguration;
