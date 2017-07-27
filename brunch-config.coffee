module.exports =

  files:
    javascripts: joinTo:
      'js/lib.js': /^(?!app)/
      'js/app.js': /^(app)/
    stylesheets: joinTo:
      'css/lib.css': /^(?!app)/
      'css/app.css': /^(app)/
    templates: joinTo: 'js/app.js'
    
  plugins:
    babel:
      presets: ['env']
    postcss: processors: [
      require('postcss-cssnext')
      require('postcss-font-magician')
    ]
