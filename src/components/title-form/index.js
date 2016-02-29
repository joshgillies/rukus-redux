var actions = require('../../actions.js')

module.exports = function TitleForm (opts) {
  this.changeTitle = () => {
    opts.store.dispatch(actions.changeTitle(this.newTitle.value))
  }
}
