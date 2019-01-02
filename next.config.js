const withSharo = require('sharo-scripts/next')

// Pakai configuration dari sharo-scripts.
module.exports = withSharo({
  webpack(config) {
    // Tambah file .md dan .mdx supaya bisa autoresolve.
    config.resolve.extensions.push('.md', '.mdx', '.scss')

    return config
  }
})
