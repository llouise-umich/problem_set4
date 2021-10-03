function addTask(description, dueTime) {
    const myLists = document.createElement("lists");
    myLists.innerText=description; 

    const thing = document.querySelector('ul#task_list');
    thing.append(myLists);


    const work = document.createElement("span");
    const date = new Date(dueTime);
    work.innerText = "Due" + date.toDateString();
    myLists.append(work);


    

    let btn = document.createElement("button");
    btn.innerText = "Done";
    myLists.append(btn);
    btn.setAttribute("class","btn btn-sm btn-outline-danger done");
    btn.setAttribute("type", "button");

}

addTask("Test Assignment", 32)