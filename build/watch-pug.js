const nodemon = require('nodemon')

nodemon({
  script: 'build/pug.js',
  ext: 'pug',
  watch: './pug',
  args: ['--src=pug/', '--dest=dist/', '--injectVendors=true', '--injectSvg=true'],
  exec: 'node'
}).on('start', () => {
  console.log('Watching pug files')
}).on('restart', files => {
  if (typeof files !== 'undefined') {
    console.log(nodemon.config.command.raw.args[1])
    nodemon.config.command.raw.args[1] = `--src=${files}`
    nodemon.restart()
  }
})
