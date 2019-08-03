const getEnvVarIfDefined = require('@hunterhod/env-var-not-defined');

module.exports = ({
  loginButtonElementSelector,
  page,
  passwordElementSelector,
  userIdElementSelector,
}) => async () => {
  const USER_NAME = getEnvVarIfDefined('USER_NAME');
  const PASSWORD = getEnvVarIfDefined('PASSWORD');

  await page.type(userIdElementSelector, USER_NAME);
  await page.type(passwordElementSelector, PASSWORD);
  await page.click(loginButtonElementSelector);
};