import { test } from "../fixtures/baseFixture.js";
import { invalidLoginData, loginData, registrationData } from "../test-data/data";
import { expect } from "@playwright/test";

test.describe("User Authentication", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goTo();
  });

  test("Register new user", async ({ loginPage }) => {
    await loginPage.clickRegisterLink();
    await loginPage.registerUser(registrationData, "Sign up");
    await expect(loginPage.sidebar).toBeVisible();
    await loginPage.checkUserLoggedIn(registrationData.username);
  });

  test("Login user", async ({ loginPage }) => {
    await loginPage.clickUserLoginLink();
    await loginPage.loginUser(loginData, "Sign in");
    await expect(loginPage.sidebar).toBeVisible();
    await loginPage.checkUserLoggedIn("ivanna");
  });

  test("Login user with invalid data", async ({ loginPage }) => {
    await loginPage.clickUserLoginLink();
    await loginPage.loginUser(invalidLoginData, "Sign in");
    await expect(loginPage.errorMessage).toBeVisible();
    // Fix the error message assertion here based on the exact error text
    await expect(loginPage.errorMessage).toContainText("email or password:is invalid"); // Removed the extra colon
  });
});
