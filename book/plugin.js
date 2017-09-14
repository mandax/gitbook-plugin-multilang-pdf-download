var inject = ['gitbook', 'lodash']

function plugin(gitbook, _) {

  function initialize(e, config) {
    var conf = config['multilang-pdf-download']
    var lang = gitbook.state.innerLanguage
    var name = _.template(conf.fileName)({ lang: lang })

    gitbook.toolbar.createButton({
      icon: 'fa fa-file-pdf-o',
      text: conf.label[lang],
      onClick: function () { window.open(conf.base + name) }
    })
  }
  
  gitbook.events.bind('start', initialize)
}

require(inject, plugin)
