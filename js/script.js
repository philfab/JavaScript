const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');
const delBtn = document.querySelector('.delBtn');
const compteur = document.querySelector('.compteur');
let count = 1;
majCompteur(count);


addBtn.addEventListener('click', addTask);
delBtn.addEventListener('click', function () {
    delTask(taskCard);
});

//ajouter une card
function addTask() {
    const newTask = taskCard.cloneNode(true);
    const newTextArea = newTask.querySelector('.task');
    const newDelBtn = newTask.querySelector('.delBtn');
    newTextArea.value = 'New Task';
    taskContainer.appendChild(newTask);

    newDelBtn.addEventListener('click', function () {
        delTask(newTask);
    })
    majCompteur(++count);
}

//supprimer une card
function delTask(task) {
    task.remove();
    majCompteur(--count);
}

function majCompteur(count) {
    compteur.innerHTML = count;
}




