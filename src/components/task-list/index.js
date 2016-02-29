module.exports = function TaskList (opts) {
  this.handleCheck = (evt) => {
    opts.handlecheck(evt.target.id, evt.target.checked)
  }
}
