window.onload = function () {
    console.log("window.onload");

    let task_area = document.getElementById('tasks-area');
    let br = document.createElement("br");

    let i = 0,
        curObjStr = null,
        curObjParsed = null,
        localStorageKey;
    for (; localStorageKey = window.localStorage.key(i); i++) {
        curObjStr = window.localStorage.getItem(localStorageKey);
        curObjParsed = JSON.parse(curObjStr);

        let task = document.createElement('div');
        task.setAttribute('id',"task-"+localStorageKey);
        let class_attr = document.createAttribute("class");       // Create a "class" attribute
        class_attr.value = "task-node";
        task.setAttributeNode(class_attr);

        for( let prop in curObjParsed ) {
            let field = document.createElement('div');
            let class_attr = document.createAttribute("class");       // Create a "class" attribute
            class_attr.value = prop;
            field.setAttributeNode(class_attr);
            field.innerText = curObjParsed[prop];
            task.appendChild(field);
            task.appendChild(br);
        }

        let buttonNode = document.createElement('input');
        buttonNode.setAttribute('type','button');
        buttonNode.setAttribute('value','X');
        buttonNode.setAttribute('id',"delete-"+localStorageKey);
        buttonNode.onclick= deleteTask;
        task.appendChild(buttonNode);

        task_area.appendChild(task);
        task_area.appendChild(br);
    }
}

function addTask(event){
    // @link:https://stackoverflow.com/questions/3350247/how-to-prevent-form-from-being-submitted
    event.preventDefault();
    event.stopPropagation();
    console.log("function addTask");

    let taskName = document.getElementById('task-name').value;
    let taskDate = document.getElementById('task-date').value;
    let taskDescription = document.getElementById('task-description').value;

    let addedTask = {
       'taskName':taskName,
       'taskDate':taskDate,
       'taskDescription':taskDescription
    };

    localStorage.setItem((localStorage.length).toString(), JSON.stringify(addedTask));
    return false;
}

function deleteTask(event){
    let buttonId = (event.target.id);
    let localStorageKey =  buttonId.split('-')[1];
    let taskId = "task-"+ localStorageKey;
    console.log(taskId);
    removeElement(taskId);
    localStorage.removeItem(localStorageKey);
}

function removeElement(elementId) {
    // Removes an element from the document.
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
});



