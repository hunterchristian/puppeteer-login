const getEnvVarIfDefined = require('@hunterhod/env-var-not-defined');

module.exports = async ({
  loginButtonElementSelector,
  page,
  passwordElementSelector,
  userIdElementSelector,
}) => {
  const USER_NAME = getEnvVarIfDefined('USER_NAME');
  const PASSWORD = getEnvVarIfDefined('PASSWORD');

  await page.type(userIdElementSelector, USER_NAME);
  await page.type(passwordElementSelector, PASSWORD);
  await page.click(loginButtonElementSelector);
};