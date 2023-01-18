const pwaAssetGenerator = require("pwa-asset-generator");

const path = "https://raw.githubusercontent.com/your-network/assets/main/pwa";
const background =
  "linear-gradient(135deg, #88cab9 0%, #2e7a6e 52%, #2b7368 100%)";

/**
 * @type {import("pwa-asset-generator/dist/models").CLIOptions}
 */
const sharedOptions = {
  path,
  background,
  xhtml: true,
  manifest: "./public/site.webmanifest",
  index: "./pwa/index.html", // index: "./pwa/PwaTags.tsx",

  // opaque: false,
  // darkMode: true,
  // log: false,
};

// @see https://github.com/elegantapp/pwa-asset-generator
(async () => {
  await pwaAssetGenerator.generateImages("./src/pwa-icon.svg", "./pwa", {
    ...sharedOptions,
    iconOnly: true,
    // should we generate these?
    favicon: true,
    mstile: true
  });

  await pwaAssetGenerator.generateImages("./src/pwa-splash.svg", "./pwa", {
    ...sharedOptions,
    splashOnly: true,
  });
})();
