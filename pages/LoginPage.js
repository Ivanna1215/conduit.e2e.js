import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.userLoginLink = this.page.locator(`//*[@href="/user/login"]`);
    this.registerUserLink = this.page.locator(`//*[@href="/user/register"]`);
    this.sidebar = this.page.locator(".sidebar");
    this.profileLink = this.page.locator('//a[contains(@href, "profile")]');
  }

  getInputLocator(name) {
    return this.page.getByPlaceholder(`${name}`);
  }

  getButton(name) {
    return this.page.getByRole("button", { name: `${name}` });
  }

  async clickUserLoginLink() {
    await this.userLoginLink.click();
  }

  async clickRegisterLink() {
    await this.registerUserLink.click();
  }

  async fillInputByName(name, text) {
    await this.getInputLocator(name).fill(text);
  }

  async fillInputs(data) {
    for (const [key, value] of Object.entries(data)) {
      await this.getInputLocator(key).fill(value);
    }
  }

  async clickButton(name) {
    await this.getButton(name).click();
  }

  async loginUser(data, nameButton) {
    await this.fillInputs(data);
    await this.clickButton(nameButton);
  }

  async registerUser(data, nameButton) {
    await this.fillInputs(data);
    await this.clickButton(nameButton);
  }

  async checkUserLoggedIn(username) {
    await expect(this.profileLink.getByText(username.toLowerCase())).toHaveText(username.toLowerCase());
  }
}
