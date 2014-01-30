var config = {
  ns: 'semantic'
, filename: __filename
}

module.exports = function(app, options) {
  var outConfig = Object.create(config)
  outConfig.styles = options && options.styles ||
    __dirname + '/semantic/build/packaged/css/semantic.min'
  app.createLibrary(outConfig, options)
}

