import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { toNumberIfNotZero, toNumberIfNotNull } from "../../utils/toNumber.spec";

export class NewsletterForm extends BasePage {

    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subscribeButton: Locator;
    readonly message: Locator;
    readonly messageSelector: string;

    constructor(page: Page) {
        
        super(page);

        this.messageSelector = '#es_msg';
        this.nameField = page.locator('#es_txt_name');
        this.emailField = page.locator('#es_txt_email');
        this.subscribeButton = page.locator('#es_txt_button');
        this.message = page.locator(this.messageSelector);
    }

    async clickNameField() {

        await this.nameField.click();
    }

    async clickEmailField() {

        await this.emailField.click();
    }

    async setName(name: string) {

        await this.nameField.fill(name);
    }

    async setEmail(email: string) {

        await this.emailField.fill(email);
    }

    async clickSubscribeButton() {

        await this.subscribeButton.click();
    }

    async getNameFieldContent() {

        return await this.nameField.inputValue();
    }

    async getEmailFieldContent() {

        return await this.emailField.inputValue();
    }

    async getNameFieldMaxLength(): Promise<number | undefined> {

        return toNumberIfNotNull(await this.nameField.getAttribute('maxlength'));
    }

    async getEmailFieldMaxLength(): Promise<number | undefined> {

        return toNumberIfNotNull(await this.emailField.getAttribute('maxlength'));
    }

    getMessageSelector() {

        return this.messageSelector;
    }

    getMessageLocator() {

        return this.message; 
    }
}