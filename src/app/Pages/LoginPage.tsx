import React, { useState } from 'react';
import brandImg from './brandImgColor.svg';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

const MyLoginPage: React.FunctionComponent = () => {
  // Set state variables
  const [showHelperText, toggleShowHelperText] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [isValidUsername, setIsValidUsername] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isRememberMeChecked, toggleIsRememberMeChecked] = useState<boolean>(false);
  const helperText = (
    <React.Fragment>
      <ExclamationCircleIcon />
      &nbsp;Invalid login credentials.
    </React.Fragment>
  );

  // Event handlers
  const onLoginButtonClick = (event) => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    toggleShowHelperText(!!username || !!password);
  };

  // JSX
  const forgotCredentials = (
    <LoginMainFooterBandItem>
      <a href="#">Forgot username or password?</a>
    </LoginMainFooterBandItem>
  );

  const listItem = (
    <React.Fragment>
      <ListItem>
        <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="#">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>
  );

  const loginForm = (
    <LoginForm
      showHelperText={showHelperText}
      helperText={helperText}
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={username}
      onChangeUsername={(value) => setUsername(value)}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={password}
      onChangePassword={(value) => setPassword(value)}
      isValidPassword={isValidPassword}
      rememberMeLabel="Keep me logged in for 30 days."
      isRememberMeChecked={isRememberMeChecked}
      onChangeRememberMe={(value) => toggleIsRememberMeChecked(value)}
      onLoginButtonClick={onLoginButtonClick}
    />
  );

  return (
    <LoginPage
      //footerListVariants="inline"
      // brandImgSrc={brandImg2}
      brandImgAlt="PatternFly logo"
      // backgroundImgSrc={images}
      backgroundImgAlt="Images"
      footerListItems={listItem}
      textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users."
      loginTitle="Log in to your account"
      loginSubtitle="Please use your single sign-on LDAP credentials"
    >
      {loginForm}
    </LoginPage>
  );
};

export default MyLoginPage;
