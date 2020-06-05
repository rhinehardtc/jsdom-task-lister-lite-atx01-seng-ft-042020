const taskForm = document.getElementById("create-task-form");

const all = [];

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('new-task-description');
  const li = document.createElement('li');
  const liButton = document.createElement('button');
  const importance = document.createElement('select');
  const options = ['low', 'medium', 'high'];
  options.forEach((option, index) => importance[index] = new Option(option, index));

  importance.addEventListener('change', (e) => {
    if (e.target.value == 0){
      li.style.color = 'green';
    } else if (e.target.value == 1){
      li.style.color = 'blue'
    } else {
      li.style.color = 'red'
    };

    renderTasks();
  } )
  
  liButton.innerText = 'cross off list';

  
  liButton.addEventListener('click', (e) => {li.remove()})
  li.innerText = taskInput.value + ' ';
  li.appendChild(liButton);
  li.appendChild(importance);
  all.push(li);
  renderTasks();

  taskInput.value = '';
})

function renderTasks(){
  const tasks = document.getElementById('tasks');
  tasks.innerHTML = '';
  let sorted = all.sort((a,b) => a.children[1].value - b.children[1].value);
  sorted.forEach(li => tasks.appendChild(li))
};






