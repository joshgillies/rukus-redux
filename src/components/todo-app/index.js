var actions = require('../../actions.js')

module.exports = function TodoApp (opts) {
  var store = this.opts.store

  this.on('mount', function () {
    store.dispatch(actions.loadTasks())
  })

  store.subscribe(() => {
    this.state = store.getState()
    this.update()
  })

  this.handleNewTask = (task) => {
    store.dispatch(actions.addTask(task))
  }

  this.handleTaskCompletionChange = (id, isComplete) => {
    store.dispatch(actions.toggleComplete(id, isComplete))
  }

  this.hideErrorMessage = () => {
    store.dispatch(actions.hideError())
  }
}
