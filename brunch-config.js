// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  stylus: { modules: true }
};

exports.hot = true;
