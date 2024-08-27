import { AppiumServerArguments } from "@wdio/appium-service";
import type { Capabilities } from "@wdio/types";
import { join } from "path";

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",

  maxInstances: 2,
  specs: [
    join(process.cwd(), "./src/features/test1.feature"),
    join(process.cwd(), "./src/features/test2.feature"),
  ],

  suites: {
    test1: [join(process.cwd(), "./src/features/test1.feature")],
    test2: [join(process.cwd(), "./src/features/test2.feature")],
  },
  exclude: [],

  capabilities: [
    {
      platformName: "iOS",
      "appium:automationName": "XCUITest",
      "appium:bundleId": "com.apple.mobilesafari",
      "appium:autoAcceptAlerts": true,
      "appium:autoLaunch": false,
      "appium:deviceName": "iPhone 15 Pro",
      "appium:platformVersion": "17.5",
      "appium:noReset": false,
      "appium:fullReset": false,
      "appium:newCommandTimeout": 120,
      "appium:iPhoneOnly": true,
    } as Capabilities.AppiumXCUITestCapabilities,
  ],

  logLevel: "error",
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  services: [
    [
      "appium",
      {
        logPath: "./logs/wdio-appium.log",
        command: "appium",
        args: {
          address: "0.0.0.0",
          port: 4724,
          basePath: "/wd/hub",
        } as AppiumServerArguments,
      },
    ],
  ],

  framework: "cucumber",
  reporters: [
    [
      "spec",
      {
        realtimeReporting: true,
        showPreface: false,
      },
    ],
  ],

  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [join(process.cwd(), "./src/steps/*.ts")],
    // <boolean> show full backtrace for errors
    backtrace: false,
    retry: 0,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tags: "",
    // <number> timeout for step definitions
    timeout: 120000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },
};
