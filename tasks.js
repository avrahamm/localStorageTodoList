window.onload = function () {
    console.log("window.onload");
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



