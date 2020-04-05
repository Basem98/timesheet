const Task = require('../models/Task');

async function getTasks() {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function newTask(taskInfo) {
  try {
    const savedTask = await Task.create(taskInfo);
    return savedTask;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function findByMonth(month, type) {
  try {
    const options = type ? { taskMonth: month, taskType: type } : { taskMonth: month };
    const tasksForMonth = await Task.find(options);
    const totalNumOfTasks = tasksForMonth.length;
    let sumOfAET = 0;
    for (let i = 0; i < totalNumOfTasks; i += 1) {
      sumOfAET += tasksForMonth[i].taskAET;
    }
    return {
      tasks: tasksForMonth,
      totalNumOfTasks,
      totalMonthlyTime: sumOfAET.toFixed(2)
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function findByDateAndType(fullDate, type) {
  try {
    const tasksForDay = await Task.find({ taskFullDate: fullDate, taskType: type });
    const totalNumOfTasks = tasksForDay.length;
    let sumOfAET = 0;
    for (let i = 0; i < totalNumOfTasks; i += 1) {
      sumOfAET += tasksForDay[i].taskAET;
    }
    return {
      tasks: tasksForDay,
      totalNumOfTasks,
      totalDailyTime: sumOfAET.toFixed(2)
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  newTask,
  getTasks,
  findByMonth,
  findByDateAndType
};
