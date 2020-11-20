import * as React from 'react';
import { FormGroup, TextInput, Card, CardTitle, CardBody } from '@patternfly/react-core';
import { Controller, Control } from 'react-hook-form';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

interface BasicConfigurationProps {
  register: any;
}
const BasicConfiguration: React.FunctionComponent<BasicConfigurationProps> = ({ register }) => (
  <React.Fragment>
    <Card>
      <CardTitle>Basic Configuration</CardTitle>
      <CardBody>
        <div className="pf-c-form__group">
          <div className="pf-c-form__group-label">
            <label className="pf-c-form__label" htmlFor="form-help-text-name">
              <span className="pf-c-form__label-text">Name</span>
              <span className="pf-c-form__label-required" aria-hidden="true">
                &#42;
              </span>
            </label>
          </div>
          <div className="pf-c-form__group-control">
            <input
              className="pf-c-form-control"
              required
              type="text"
              id="form-help-text-name"
              name="form-help-text-name"
              aria-describedby="form-help-text-name-helper"
              ref={register}
            />
            <p className="pf-c-form__helper-text" id="form-help-text-name-helper" aria-live="polite">
              This is helper text
            </p>
          </div>
        </div>
        {/* <div className="pf-c-form__group">
          <div className="pf-c-form__group-label">
            <label className="pf-c-form__label" htmlFor="form-help-text-email">
              <span className="pf-c-form__label-text">E-mail</span>
              <span className="pf-c-form__label-required" aria-hidden="true">
                &#42;
              </span>
            </label>
          </div>
          <div className="pf-c-form__group-control">
            <input
              className="pf-c-form-control pf-m-warning"
              required
              type="text"
              id="form-help-text-email"
              name="form-help-text-email"
              aria-describedby="form-help-text-email-helper"
            />
            <p className="pf-c-form__helper-text pf-m-warning" id="form-help-text-email-helper" aria-live="polite">
              This is helper text for a warning input
            </p>
          </div>
        </div>
        <div className="pf-c-form__group">
          <div className="pf-c-form__group-label">
            <label className="pf-c-form__label" htmlFor="form-help-text-address">
              <span className="pf-c-form__label-text">Address</span>
              <span className="pf-c-form__label-required" aria-hidden="true">
                &#42;
              </span>
            </label>
          </div>
          <div className="pf-c-form__group-control">
            <input
              className="pf-c-form-control"
              required
              type="text"
              id="form-help-text-address"
              name="form-help-text-address"
              aria-invalid="true"
              aria-describedby="form-help-text-address-helper"
            />
            <p className="pf-c-form__helper-text pf-m-error" id="form-help-text-address-helper" aria-live="polite">
              This is helper text for an invalid input
            </p>
          </div>
        </div>
        <div className="pf-c-form__group">
          <div className="pf-c-form__group-label">
            <label className="pf-c-form__label" htmlFor="form-help-text-comment">
              <span className="pf-c-form__label-text">Comment</span>
            </label>
          </div>
          <div className="pf-c-form__group-control">
            <input
              className="pf-c-form-control pf-m-success"
              value="This is a valid comment"
              type="text"
              id="form-help-text-comment"
              name="form-help-text-comment"
              aria-describedby="form-help-text-comment-helper"
            />
            <p className="pf-c-form__helper-text pf-m-success" id="form-help-text-comment-helper" aria-live="polite">
              This is helper text for success input
            </p>
          </div>
        </div>
        <div className="pf-c-form__group">
          <label className="pf-c-form__label" htmlFor="form-help-textinfo">
            <span className="pf-c-form__label-text">Information</span>
          </label>
          <textarea
            className="pf-c-form-control"
            id="form-help-textinfo"
            name="form-help-textinfo"
            aria-invalid="true"
            aria-describedby="form-help-textinfo-helper"
          ></textarea>
          <p className="pf-c-form__helper-text pf-m-error" id="form-help-textinfo-helper" aria-live="polite">
            <span className="pf-c-form__helper-text-icon">
              <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
            </span>
            This is helper text with an icon.
          </p>
        </div>*/}
      </CardBody>
    </Card>
  </React.Fragment>
);

export default BasicConfiguration;
