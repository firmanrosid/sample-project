import { Given } from "@wdio/cucumber-framework";

Given("Test 1", async () => {
    await driver.pause(5000);
    console.log("Test 1");
    await driver.activateApp("com.apple.mobilesafari");
    await driver.pause(60000);
});

Given("Test 2", async () => {
    await driver.pause(5000);
    console.log("Test 2");
    await driver.activateApp("com.apple.Preferences");
    await driver.pause(60000);
});
