const path = require('path');
module.exports = {
  extends: 'rex',
  rules: {
    'no-console': 0,
  },
  settings: {
    // For ESLint to understand webpack resolve rules
    'import/resolver': {
      webpack: {
        'config': path.join(__dirname, 'webpack.config.js')
      }
    }
  },
};
