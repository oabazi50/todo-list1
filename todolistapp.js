const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-id');
const taskCounter = document.getElementById('task-counter');

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === '')return;

const listItem = document.createElement('li');
listItem.textContent = taskText;

listItem.addEventListener('click', ()=>{
    listItem.classList.toggle('completed');
    updateTaskCounter();
});


//logjika per fshirjen e taskqeve
const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';
deleteButton.style.marginLeft = '10px';
deleteButton.addEventListener('click', () =>{
     taskList.removeChild(listItem);
     updateTaskCounter();
})

//logjika per editimin e tasqeve as homework me ba

listItem.appendChild(deleteButton);
taskList.appendChild(listItem);
taskInput.value='';
updateTaskCounter();

}

function updateTaskCounter(){
    const taskCount = taskList.children.length;
    taskCounter.textContent = `Tasks: ${taskCount}`;
}