const loaderUtils = require('loader-utils');
const dot = require('dot');
const fs = require('fs');


function dotLoader() {
  let result;
  const options = loaderUtils.getOptions(this) || {};
  const htmlResourceRoot = options.htmlResourceRoot;
  dot.templateSettings.selfcontained = true;
  Object.assign(dot.templateSettings, options.dotSettings);
  
  result = `module.exports = ${dot.template(fs.readFileSync(this.resourcePath))}`;
  if () {
    
  }
  return result;
}

module.exports = dotLoader;