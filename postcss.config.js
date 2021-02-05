module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'tailwindcss': {},
    'postcss-preset-env': {},
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {}
    })
  }
}
