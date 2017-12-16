const requireContext = require.context('.', true, /\.js$/)

requireContext.keys().forEach(key => {
  const componentName = key.replace('.js', '').replace('./', '')
  module.exports[componentName] = requireContext(key).default
})
