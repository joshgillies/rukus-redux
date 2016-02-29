module.exports = function TaskForm (opts) {
  this.handleSubmit = () => {
    opts.addtask(this.newTask.value)
    this.newTask.value = ''
  }
}
