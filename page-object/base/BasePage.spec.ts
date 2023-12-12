import { Page } from "@playwright/test";

export class BasePage {

    private page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goto(URL: string) {

        await this.page.goto(URL);
    }

    async getPage() {

        return this.page;
    }
}