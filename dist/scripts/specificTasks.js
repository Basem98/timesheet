const tableToggler = document.getElementById('hidden-div-toggler');
tableToggler.onclick = function showTable() {
  const specificTasksTable = document.getElementById('specificTasks-container');
  if (specificTasksTable.style.display === 'none') {
    specificTasksTable.style.display = 'block';
  } else {
    specificTasksTable.style.display = 'none';
  }
};


const dateSender = document.getElementById('specificDateSender-button');
let dateInput = '';
document.getElementById('specificDate').onkeyup = function onDateKeyUp(event) {
  dateInput = event.target.value;
};

function getTasksForSpecificDate(type, date) {
  fetch(`/getdailytotal/${date}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const tasksForSpecificDate = document.createElement('div');
      document.getElementById('specificDay-tasksTable').appendChild(tasksForSpecificDate);
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      tasksForSpecificDate.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Date: ${date}`);
      h3.appendChild(thirdHeader);
      tasksForSpecificDate.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalDailyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      tasksForSpecificDate.appendChild(ul);
    })
    .catch((error) => console.error(error));
}


const monthSender = document.getElementById('specificMonthSender-button');
let monthInput = '';
document.getElementById('specificMonth').onkeyup = function onMonthKeyUp(event) {
  monthInput = event.target.value;
};

function getTasksForSpecificMonth(type, month) {
  fetch(`/getmonthlytotalbytype/${month}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const tasksForSpecificMonth = document.createElement('div');
      document.getElementById('specificMonth-tasksTable').appendChild(tasksForSpecificMonth);
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      tasksForSpecificMonth.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Month: ${month}`);
      h3.appendChild(thirdHeader);
      tasksForSpecificMonth.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalMonthlyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      tasksForSpecificMonth.appendChild(ul);
    })
    .catch((error) => console.error(error));
}


dateSender.onclick = function callSpecificDateTasksGetters() {
  const taskTypes = ['EXP', 'RR', 'SxS'];
  for (let i = 0; i < taskTypes.length; i += 1) {
    getTasksForSpecificDate(taskTypes[i], dateInput);
  }
};

monthSender.onclick = function callSpecificMonthTasksGetters() {
  const taskTypes = ['EXP', 'RR', 'SxS'];
  for (let i = 0; i < taskTypes.length; i += 1) {
    getTasksForSpecificMonth(taskTypes[i], monthInput);
  }
};
