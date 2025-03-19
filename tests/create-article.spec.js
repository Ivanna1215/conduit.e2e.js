import { test } from "../fixtures/baseFixture.js";
import { loginData, articleData, emptyArticleData } from "../test-data/data";
import { expect } from "@playwright/test";

test.describe("Article Creation", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.clickUserLoginLink();
    await loginPage.loginUser(loginData, "Sign in");
  });

  test("Create article", async ({ createArticlePage }) => {
    await createArticlePage.createArticle(articleData);
    await expect(createArticlePage.articleTitleLocator).toContainText(articleData.articleTitle);
  });

  test("Create article without data", async ({ createArticlePage }) => {
    await createArticlePage.createArticle(emptyArticleData);
    await expect(createArticlePage.errorMessage).toBeVisible();
    await expect(createArticlePage.errorMessage).toContainText("Article title cannot be empty");
  });
});
