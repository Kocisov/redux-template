const exec = require('child_process').exec

console.log('-- Running CRA at specified location -----')
exec(`create-react-app ${process.argv[2]}`)

console.log('-- Installing deps -----')

exec(
  'npm install --save redux redux-persist localforage redux-thunk styled-components react-router-dom react-router-redux@next react-redux react-icons typeface-roboto'
)
