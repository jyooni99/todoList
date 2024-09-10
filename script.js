const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const todoTextBox = document.getElementsByClassName('todoTextBox')[0];


function addTodo(){
  // 리스트 요소 생성
  const todo = document.createElement('ul');
  const todoTextBox = document.createElement('div');
  const text = document.createElement('li');
  const todoBtnBox = document.createElement('div');
  const changeBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  
  // 클래스 추가 & 타입 추가
  todo.classList.add('todo');
  todoTextBox.classList.add('todoTextBox');
  text.classList.add('text', 'unChecked');
  todoBtnBox.classList.add('todoBtnBox');
  changeBtn.classList.add('changeBtn');
  deleteBtn.classList.add('deleteBtn');
  changeBtn.type = 'button';
  deleteBtn.type = 'button';
  
  //DOM에 요소 추가
  todoList.appendChild(todo);
  todo.appendChild(todoTextBox);
  todoTextBox.appendChild(text);
  todo.appendChild(todoBtnBox);
  todoBtnBox.appendChild(changeBtn);
  todoBtnBox.appendChild(deleteBtn);
  
  //값 추가
  let val = document.getElementById('todoInput').value;
  text.innerText = val;
  changeBtn.innerText = '수정';
  deleteBtn.innerText = '삭제';
}

function checked(){
  const text = document.getElementsByClassName('text')[0];
  text.classList.toggle('unChecked');
  text.classList.toggle('checked');
}

todoTextBox.addEventListener('click', checked);
addBtn.addEventListener('click', addTodo);