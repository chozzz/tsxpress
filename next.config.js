/* eslint-disable @typescript-eslint/no-var-requires */
const scopeNameGenerator = require("./config/scopeNameGenerator");
const webpackModuleOverrider = {
    "/css-loader": (loader, dev) => {
      if (loader.options && loader.options.modules) {
        loader.options.modules = Object.assign(loader.options.modules, {
          mode: "local",
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getLocalIdent: (context, localIdentName, localName, options) => {
            return scopeNameGenerator.generateScopedName(dev, localName, context.resourcePath);
          },
        });

        return true;
      }
    },
  },
  overrideKeys = Object.keys(webpackModuleOverrider);

const nextConfig = {
  future: {},
  generateEtags: false,
  poweredByHeader: false,
  trailingSlash: false,
  compress: true,
  inlineImageLimit: false,
  // Disable for now (https://github.com/vercel/next.js/issues/26130)
  webpack5: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
     * Override some of the existing loaders
     */
    const oneOfRules = config.module.rules.find((rule) => typeof rule.oneOf === "object"),
      overrideLoader = (use) => {
        if (use && use.loader) {
          // console.log(dev, use.loader);
          for (let i = 0, len = overrideKeys.length; i < len; i++) {
            const key = overrideKeys[i];
            if (use.loader.indexOf(key) >= 0 && Object.hasOwnProperty.call(webpackModuleOverrider, key)) {
              const overrideFn = webpackModuleOverrider[key];
              console.log("[Next.config] Overriding configuration for " + key);
              if (overrideFn(use, dev)) {
                return;
              }
            }
          }
        }
      };

    if (oneOfRules) {
      oneOfRules.oneOf.forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use.map(overrideLoader);
        } else if (rule.use && rule.use.loader) {
          overrideLoader(rule.use);
        }
      });
    }

    return config;
  },
};

const withPlugins = require("next-compose-plugins"),
  withImages = require("next-images"),
  redirects = {
    redirects: async () => {
      return [
        {
          source: "/not-found",
          destination: "/404",
          permanent: true,
        },
      ];
    },
  };

module.exports = withPlugins([withImages, [redirects]], nextConfig);
