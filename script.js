
document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('text');
  const addTaskButton = document.getElementById('addTask');

  addTaskButton.addEventListener('click', () => {
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="custom-span">${newTask}</span>
        <i class="fas fa-times deleteTask"></i>
      `;

      li.querySelector('.deleteTask').addEventListener('click', () => {
        taskList.removeChild(li);
      });

      li.addEventListener('click', () => {
        li.classList.toggle('checked');
      });

      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
});
