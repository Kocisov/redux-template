#!/usr/bin/env node

const { realpathSync, copy } = require('fs-extra')
const { resolve } = require('path')
const { execSync } = require('child_process')

const activeDirectory = realpathSync(process.cwd())
const templateDir = resolve(__dirname, 'files')
const srcDirectory = resolve(activeDirectory, 'src')

const exec = (command, env) => execSync(command, { stdio: 'inherit', env })

copy(templateDir, srcDirectory)

const deps = [
  'history',
  'localforage',
  'react-icons',
  'react-motion',
  'react-redux',
  'react-router-dom',
  'react-router-redux@next',
  'redux-persist',
  'redux-thunk',
  'redux',
  'styled-components'
]

exec(`pnpm install ${deps.join(' ')}`)
