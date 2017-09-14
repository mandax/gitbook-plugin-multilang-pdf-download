var _ = require('lodash')
var gitbook = require('gitbook')

function init() {
  var conf = this.options.pluginsConfig['multilang-pdf-download']
  var lang = this.options.language
  var name = _.template(conf.fileName)({ lang: lang })

  gitbook.toolbar.createButton({
    icon: 'fa fa-file-pdf-o',
    text: conf.label[lang],
    onClick: function () { window.open(conf.base + name) }
  })
}

module.exports = {
  hooks: {
    init: init
  }
}
