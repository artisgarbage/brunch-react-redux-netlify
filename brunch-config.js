// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: {
      'vendor.css': /^bower_components/,
      'app.css': /^app/
    }
  }
}

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  stylus: { modules: true }
}

exports.overrides = {
  production: {
    optimize: true,
    sourceMaps: false
  }
}

exports.hot = true;
