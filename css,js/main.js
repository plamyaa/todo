
import {BtnsAdd,
    highFormValue,
    lowFormValue,
    isEmpty
} from './view.js'

BtnsAdd.forEach(function(BtnAdd){
    BtnAdd.addEventListener('click', function(){
        const valueOftask = BtnAdd.closest('.tasks') 
        if (highFormValue.value){
            valueOftask.append(addTask(highFormValue.value));
            highFormValue.value = isEmpty;
        }
        else if (lowFormValue.value) {
            valueOftask.append(addTask(lowFormValue.value));
            lowFormValue.value = isEmpty;
        }
        else
            return; 
    })
})

function addTask(formValue){
    let task = document.createElement("div")
    let checkbox = document.createElement("button")
    let taskText = document.createElement("p")
    let buttonDel = document.createElement("img")

    task.classList.add('task');
    checkbox.classList.add('done__button');
    buttonDel.classList.add('img__delete');
    buttonDel.src = "/img/cross.svg";
    buttonDel.alt = isEmpty;
    taskText.innerHTML = lengthCheck(formValue);

    task.append(checkbox)
    task.append(taskText)
    task.append(buttonDel)
    checkbox.addEventListener("click", changeStatusTask);
    buttonDel.addEventListener("click", deleteTask);

    return task;
    
}

function lengthCheck (formValue) {

    if (formValue.length > 30) {
        let finish = '';
        for (let i = 0; i < formValue.length; i += 30){
            let firstPart = formValue.slice(0, i);
            let secondPart = formValue.slice(i);
            finish = firstPart + '<br>' + secondPart;
        }
        return finish;
    }
    else
        return formValue
}

function deleteTask ()  {
    this.parentElement.remove();
}

function changeStatusTask (){
    this.classList.toggle('done__button-checked')
    this.closest('.task').classList.toggle('task-checked')
}

