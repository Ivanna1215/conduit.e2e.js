import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CreateArticlePage extends BasePage {
  constructor(page) {
    super(page);
    this.editorLink = this.page.locator('//a[contains(@href,"/editor")]');
    this.editorTitle = this.page.getByPlaceholder("Article Title");
    this.editorDescription = this.page.getByPlaceholder("What's this article about?");
    this.articleTextArea = this.page.getByPlaceholder("Write your article (in markdown)");
    this.tagsPlaceholder = this.page.getByPlaceholder("Enter tags");
    this.buttonPublish = this.page.locator('button:has-text("Publish Article")');
    this.articleTitleLocator = this.page.locator('[class="container"] h1');
    this.articlePage = this.page.locator('[class="article-page"]');
  }

  async createArticle(data) {
    await this.editorLink.click();
    await this.editorTitle.fill(data.articleTitle);
    await this.editorDescription.fill(data.articleDescription);
    await this.articleTextArea.fill(data.articleText);
    await this.tagsPlaceholder.fill(data.articleTag);
    await this.buttonPublish.press("Enter");
  }
}
