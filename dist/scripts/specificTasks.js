const tableToggler = document.querySelector('.hidden-div-toggler');
const specificDateInput = document.querySelector('#specificDate');
const specificMonthInput = document.querySelector('#specificMonth');
const dailyTasksList = document.querySelector('.dailyTasks-list');
const monthlyTasksList = document.querySelector('.monthlyTasks-list');
const dateSender = document.querySelector('.specificDateSender-button');
const monthSender = document.querySelector('.specificMonthSender-button');

let monthInput = '';
let dateInput = '';


function getTasksForSpecificDate(type, date) {
  fetch(`/getdailytotal/${date}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      dailyTasksList.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Date: ${date}`);
      h3.appendChild(thirdHeader);
      dailyTasksList.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalDailyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      dailyTasksList.appendChild(ul);
    })
    .catch((error) => console.error(error));
}

function getTasksForSpecificMonth(type, month) {
  fetch(`/getmonthlytotalbytype/${month}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      monthlyTasksList.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Month: ${month}`);
      h3.appendChild(thirdHeader);
      monthlyTasksList.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalMonthlyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      monthlyTasksList.appendChild(ul);
    })
    .catch((error) => console.error(error));
}


tableToggler.onclick = function showTable() {
  const specificTasksTable = document.querySelector('#specificTasks-container');
  if (specificTasksTable.style.display === 'flex') {
    specificTasksTable.style.display = 'none';
  } else {
    specificTasksTable.style.display = 'flex';
  }
};

specificMonthInput.onkeyup = function onMonthKeyUp(event) {
  monthInput = event.target.value;
};

specificDateInput.onkeyup = function onDateKeyUp(event) {
  dateInput = event.target.value;
};

dateSender.onclick = function callSpecificDateTasksGetters() {
  const taskTypes = ['EXP', 'RR', 'SxS'];
  dailyTasksList.innerHTML = '';
  for (let i = 0; i < taskTypes.length; i += 1) {
    getTasksForSpecificDate(taskTypes[i], dateInput);
  }
};

monthSender.onclick = function callSpecificMonthTasksGetters() {
  const taskTypes = ['EXP', 'RR', 'SxS'];
  monthlyTasksList.innerHTML = '';
  for (let i = 0; i < taskTypes.length; i += 1) {
    getTasksForSpecificMonth(taskTypes[i], monthInput);
  }
};
