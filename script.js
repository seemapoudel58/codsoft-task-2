document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('text');
  const addTaskButton = document.getElementById('addTask');

  addTaskButton.addEventListener('click', () => {
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${newTask}</span>
        <i class="fas fa-times deleteTask"></i>
      `;

      li.querySelector('.deleteTask').addEventListener('click', () => {
        taskList.removeChild(li);
      });

      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
});