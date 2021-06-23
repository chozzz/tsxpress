module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
        safelist: {
          deep: [
          ],
          standard: [
            /html|body|\*/,
            /**
             * Whitelist all font awesome imports
             * Src: https://github.com/FortAwesome/Font-Awesome/blob/master/css/all.css
             */
            /^fa(s|r|d|l|b)?/,
            /**
             * Imported as part of react bootstrap
             */
            /nav(bar)?/,
            // /pagination|page/,
            // /collaps(e|ing)?/,
            // /fade/,
            // /progress/,
            // /dropdown/,
            // /modal/,
            // /sr-only/,
            // /close/,
            // /input-group/,
            // /fade|show|tooltip/,
            // /is-(in)?valid/,
          ],
        },
        extractors: [
          {
            extractor: (content) => {
              const result = [];
              /**
               * Attempts to grab from attributes
               * e.g.
               * - classNames(styles['sexy-container'])
               * - <div className={styles['sexy-container]} />
               * - <div styleName={'sexy-container'} />
               * - <button type="button"></button>
               */
              const classMatches = content.match(/('|")[a-z0-9_\-\s]+\1/g) || [];
              for (let i = 0, len = classMatches.length; i < len; i++) {
                let classesMatch = classMatches[i];

                // Strip ' and "
                classesMatch = classesMatch.replace(/'|"/g, "").split(" ").filter(Boolean);

                if (classesMatch && classesMatch.length) {
                  result.push(...[...new Set(classesMatch)]);
                }
              }

              /**
               * Attemps to grab from Tags
               * e.g.
               * - <div>
               * - <details>
               */
              const tagsMatches = content.match(/(?:<)([a-z0-9]+)/g) || [];
              for (let i = 0, len = tagsMatches.length; i < len; i++) {
                let tagMatch = tagsMatches[i];

                // Strip <
                tagMatch = tagMatch.replace(/</g, "");

                if (tagMatch && tagMatch.length && result.indexOf(tagMatch) === -1) {
                  result.push(tagMatch);
                }
              }

              // console.log('extractor', result);
              return result || [];
            },
            extensions: ["html", "ts", "tsx"],
          },
        ],
      },
    ],
  ],
};