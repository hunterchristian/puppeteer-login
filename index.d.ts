import { Page } from 'puppeteer';

interface LoginParams {
  page: Page;
  userIdElementSelector: string;
  passwordElementSelector: string;
  loginButtonElementSelector: string;
}

declare const login: (params: LoginParams) => Promise<void>;
export default login;