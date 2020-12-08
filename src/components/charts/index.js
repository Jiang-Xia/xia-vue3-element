
const req = require.context('./common', false, /\.vue$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const list = requireAll(req)
export const componentfn = app => {
  list.forEach(v => {
    app.component(v.default.name, v.default)
  })
}
