module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html'
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        'Jost',
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      ],
      mono: [
        'Anonymous Pro',
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      ],
    }
  },
  variants: {},
  plugins: [],
}
