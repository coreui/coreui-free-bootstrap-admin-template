#!/usr/bin/env node
'use strict'

const main = () => {
  if (
    process.env.SUPPRESS_SUPPORT ||
    process.env.OPENCOLLECTIVE_HIDE ||
    process.env.CI
  ) {
    return
  }

  const message =
    '\u001B[32mLove CoreUI? You can now support the project via the Open Collective:\u001B[22m\u001B[39m\n > \u001B[96m\u001B[1mhttps://opencollective.com/coreui/contribute\u001B[0m\n'

  try {
    const Configstore = require('configstore')
    const pkg = require(`${__dirname}/../package.json`)
    const now = Date.now()

    const week = 1000 * 60 * 60 * 24 * 7

    // create a Configstore instance with an unique ID e.g.
    // Package name and optionally some default values
    const conf = new Configstore(pkg.name)
    const last = conf.get('lastCheck')

    if (!last || now - week > last) {
      console.log(message)
      conf.set('lastCheck', now)
    }
  } catch {
    console.log(message)
  }
}

main()
