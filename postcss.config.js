const isDev = process.env.NODE_ENV === 'dev';

const config = {
   plugins: {
      tailwindcss: true,
      '@fullhuman/postcss-purgecss': {
         content: ['src/**/*.html'],
         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      },
      'postcss-preset-env': {
         stage: 3,
         features: {
            'nesting-rules': true,
            'custom-properties': true
         }
      },
      'postcss-clean': true
   }
};

if (isDev) delete config.plugins['@fullhuman/postcss-purgecss'];

module.exports = config;
