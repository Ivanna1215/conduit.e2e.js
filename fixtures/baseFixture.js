import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CreateArticlePage } from "../pages/CreateArticlePage";

export const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);
    await use(createArticlePage);
  },
});
