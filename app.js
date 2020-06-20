//定義UI變數
const addTodo= document.querySelector('.add-todo');
const todoList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-todos');
const todoInput = document.querySelector('#todo');
let todoArray = [
  {
    title:'測試',
  }
];
//
console.log(addTodo);
render();
addTodo.addEventListener('click',addTodos);
todoList.addEventListener('click',  deleteTodo);
clearBtn.addEventListener('click', clearAll);

function addTodos(){
  const todo = {};
  if (todoInput.value === '') {
    alert('新增一個待辦事項');
  } else{
    todo.title = todoInput.value;
    todo.complete = false;
    todoArray.push(todo);
    render();
    console.log(todoArray);
    todoInput.value = '';
  }
  
}
function render(){
  todoList.innerHTML = '';
  todoArray.forEach((item,i)=>{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.innerHTML = `<label>${item.title}</label></div><i class="delete-item secondary-content fa fa-remove" data-id="${i}"></i>`
    
    todoList.appendChild(li);
  })
}
function clearAll(){
  todoArray = [];
  render();
}
function deleteTodo(e){
  let target = e.target.dataset.id;
  todoArray.splice(target,1);
  render();
}
