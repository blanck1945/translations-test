// const fs = require("fs");
// const path = require("path");

// const localePath = "./i18n/locales";
// const locales = fs.readdirSync(localePath);
// const defaultLocale = "es-MX";

// const isDev = process.env.NODE_ENV === "development";
const LocizeBackend = require("i18next-locize-backend/cjs");
const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;

const isBrowser = typeof window !== "undefined";

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  backend: {
    backendOptions: [
      {
        expirationTime: 60 * 60 * 1000, // 1 hour
      },
      {
        projectId: "d3b405cf-2532-46ae-adb8-99e88d876733",
        version: "latest",
      },
    ],
    backends: isBrowser ? [LocalStorageBackend, LocizeBackend] : [],
  },
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
  localeExtension: "js",
  react: { useSuspense: false },
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
