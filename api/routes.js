const express = require('express');
const {
  newTask,
  getTasks,
  findByMonth,
  findByDateAndType
} = require('../database/logic/tasks-logic');

const router = express.Router();


router.post('/savetask', (req, res) => {
  const { taskType, taskAET } = req.body;
  newTask({ taskType, taskAET }).then(() => {
    res.redirect('/home.html');
  }).catch((error) => {
    console.error(error);
  });
});

router.get('/getdailytotal/:fulldate/:type', (req, res) => {
  const fulldate = req.params.fulldate;
  const type = req.params.type;
  findByDateAndType(fulldate, type).then((tasksData) => {
    res.json({
      success: true,
      tasks: tasksData.tasks,
      totalNumOfTasks: tasksData.totalNumOfTasks,
      totalDailyTime: tasksData.totalDailyTime
    });
  }).catch((error) => {
    console.error(error);
  });
});


router.get('/getmonthlytotalbytype/:month/:type', (req, res) => {
  console.log(req.baseUrl)
  const month = req.params.month;
  const type = req.params.type;
  findByMonth(month, type).then((tasksData) => {
    res.json({
      success: true,
      tasks: tasksData.tasks,
      totalNumOfTasks: tasksData.totalNumOfTasks,
      totalMonthlyTime: tasksData.totalMonthlyTime
    });
  }).catch((error) => {
    console.error(error);
  });
});

router.get('/getmonthlytotal/:month', (req, res) => {
  const month = req.params.month;
  findByMonth(month).then((tasksData) => {
    res.json({
      success: true,
      tasks: tasksData.tasks,
      totalNumOfTasks: tasksData.totalNumOfTasks,
      totalMonthlyTime: tasksData.totalMonthlyTime
    });
  }).catch((error) => {
    console.error(error);
  });
});

router.get('/getalltasks', (req, res) => {
  getTasks().then((tasks) => {
    res.json({
      success: true,
      tasks
    });
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router;
