async function getDailyTasks(type) {
  fetch(`/getdailytotal/${new Date().getDate()}-${(new Date().getMonth()) + 1}-${new Date().getFullYear()}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const dailyTasksDiv = document.createElement('div');
      document.getElementById('dailyTasks-table').appendChild(dailyTasksDiv);
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      dailyTasksDiv.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Date: ${new Date().getDate()}-${(new Date().getMonth()) + 1}-${new Date().getFullYear()}`);
      h3.appendChild(thirdHeader);
      dailyTasksDiv.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalDailyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      dailyTasksDiv.appendChild(ul);
    })
    .catch((error) => console.error(error));
}

async function getMonthlyTasks(type) {
  fetch(`/getmonthlytotalbytype/${(new Date().getMonth()) + 1}/${type}`)
    .then((response) => response.json())
    .then((response) => {
      const tasksData = response;
      const dailyTasksDiv = document.createElement('div');
      document.getElementById('monthlyTasks-table').appendChild(dailyTasksDiv);
      const h2 = document.createElement('h2');
      const secondHeader = document.createTextNode(`${type}`);
      h2.appendChild(secondHeader);
      dailyTasksDiv.appendChild(h2);
      const h3 = document.createElement('h3');
      const thirdHeader = document.createTextNode(`Current Month: ${(new Date().getMonth()) + 1}`);
      h3.appendChild(thirdHeader);
      dailyTasksDiv.appendChild(h3);
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const totalTasks = document.createTextNode(`Total Number Of Tasks: ${tasksData.totalNumOfTasks}`);
      const totalDailyAET = document.createTextNode(`Total Estimated Time: ${tasksData.totalMonthlyTime}`);
      li1.appendChild(totalTasks);
      li2.appendChild(totalDailyAET);
      ul.appendChild(li1);
      ul.appendChild(li2);
      dailyTasksDiv.appendChild(ul);
    })
    .catch((error) => console.error(error));
}

this.onload = getDailyTasks('EXP')
&& getDailyTasks('SxS')
&& getDailyTasks('RR')
&& getMonthlyTasks('EXP')
&& getMonthlyTasks('SxS')
&& getMonthlyTasks('RR');
