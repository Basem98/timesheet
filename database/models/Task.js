const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskType: {
    required: true,
    type: String
  },
  taskFullDate: {
    required: true,
    type: String,
    default: `${new Date().getDate()}-${(new Date().getMonth()) + 1}-${new Date().getFullYear()}`
  },
  taskMonth: {
    required: true,
    type: Number,
    default: new Date().getMonth() + 1
  },
  taskAET: {
    required: true,
    type: Number
  }
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
