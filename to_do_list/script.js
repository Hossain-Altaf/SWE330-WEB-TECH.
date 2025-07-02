document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;

  const list = document.getElementById('todo-list');

  const li = document.createElement('li');
  li.className = 'todo-item';

  li.innerHTML = `
    <div class="left">
      <input type="checkbox" />
      <span class="todo-text">${task}</span>
    </div>
    <button class="delete-btn">Delete</button>
  `;

  //delete 
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = '';
}
