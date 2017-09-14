var inject = ['gitbook']

function plugin(gitbook) {

  function initialize(e, config) {
    var conf = config['multilang-pdf-download']
    var lang = gitbook.state.innerLanguage
    var name = conf['file-name'].replace('{lang}', lang)

    gitbook.toolbar.createButton({
      icon: 'fa fa-file-pdf-o',
      text: conf.label[lang],
      onClick: function () { window.open(conf.base + name) }
    })
  }
  
  gitbook.events.bind('start', initialize)
}

require(inject, plugin)
