import { AppiumServerArguments } from "@wdio/appium-service";
import type { Capabilities, Options } from "@wdio/types";
import { join } from "path";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },

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
      "appium:usePrebuiltWDA": true,
      "appium:screenshotQuality": 2,
      "appium:autoLaunch": false,
      "appium:deviceName": "iPhone 15 Pro",
      "appium:platformVersion": "17.2",
      "appium:xcodeConfigFile": ".xcconfig",
      "appium:noReset": true,
      "appium:fullReset": false,
      "appium:newCommandTimeout": 120,
      "appium:locale": "id_ID",
      "appium:iPhoneOnly": true,
      "appium:udids": "FD156DDB-7C0B-43FF-989A-00EDDC072DA0,2FC39954-3BAC-45A8-8B10-2BE8718DC1F5",
      "appium:minSDK": 17,
    } as Capabilities.AppiumXCUITestCapabilities,
  ],

  logLevel: "error",
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  services: [
    [
      "appium",
      {
        logPath: "./",
        command: "appium",
        args: {
          address: "127.0.0.1",
          port: 4723,
          usePlugins: "device-farm,appium-dashboard",
          allowCors: true,
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
