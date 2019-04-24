const withSharo = require('@tkesgar/sharo-next')

// Pakai configuration dari sharo-scripts.
module.exports = withSharo({
  env: {
    BUILD_DATE: Date.now()
  }
})
