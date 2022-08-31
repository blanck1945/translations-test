// const fs = require("fs");
// const path = require("path");

// const localePath = "./i18n/locales";
// const locales = fs.readdirSync(localePath);
// const defaultLocale = "es-MX";

// const isDev = process.env.NODE_ENV === "development";

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  localeExtension: "js",
  //react: { useSuspense: false },
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
