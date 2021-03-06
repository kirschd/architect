let test = require('tape')

let create = require('@architect/create')
let createCLI = require('@architect/create/cli')

let deploy = require('@architect/deploy')
let deployCLI = require('@architect/deploy/cli')

let env = require('@architect/env')

let hydrate = require('@architect/hydrate')
let hydrateCLI = require('@architect/hydrate/cli')

let logs = require('@architect/logs')
let logsCLI = require('@architect/logs/cli')

let pkg = require('@architect/package')
let pkgCLI = require('@architect/package/cli')

let repl = require('@architect/repl')

let sandbox = require('@architect/sandbox')
let sandboxCLI = require('@architect/sandbox/src/cli/arc')

test('Core Architect packages and necessary CLI interfaces are present', t => {
  t.plan(14)
  t.ok(create, 'create found')
  t.ok(createCLI, 'create CLI found')
  t.ok(deploy, 'deploy found')
  t.ok(deployCLI, 'deploy CLI found')
  t.ok(env, 'env found')
  t.ok(hydrate, 'hydrate found')
  t.ok(hydrateCLI, 'hydrate CLI found')
  t.ok(logs, 'logs found')
  t.ok(logsCLI, 'logs CLI found')
  t.ok(pkg, 'pkg found')
  t.ok(pkgCLI, 'pkg CLI found')
  t.ok(repl, 'repl found')
  t.ok(sandbox, 'sandbox found')
  t.ok(sandboxCLI, 'sandbox CLI found')
})
