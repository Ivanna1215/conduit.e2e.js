export class BasePage {
  constructor(page) {
    this.page = page;
    this.errorMessage = this.page.locator('[class="error-messages"]');
  }

  async goTo() {
    await this.page.goto("/");
  }
}
