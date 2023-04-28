let taskList = [];

const checkforData =()=>{
    taskList=JSON.parse(localStorage.getItem("myData")) || [];
    creatTasks()
}

const handleData = () => {
    var task = new Object();
    // task name 
    task.taskName = document.getElementById("taskName").value;
    // task date 
    task.taskDate = document.getElementById("taskDate").value;
    // task time
    task.taskTime = document.getElementById("taskTime").value;
    taskList.push(task)
    document.getElementById("myForm").reset()
    localStorage.setItem("myDate",JSON.stringify(taskList))
    creatTasks()
    fadeNote()
}
const creatTasks = () => {
    //console.log("in create task");
    if (!taskList) return;
    var elTasks = document.getElementById("taskList")
    console.log(elTasks);
    var data =""
    taskList.map((item, index)=> {
        data +=`
        <div class="task" id="task${index}">
        <button class="btn" onclick="removeTask(${index})"><img src="img/ixs.png" width="30"></button>
        <p>${item.taskName}</p>
        <div class="timeDate">
            ${pretifyDate(item.taskDate)} <br/>
            ${item.taskTime}
        </div>
        </div>`
    })
    elTasks.innerHTML= data;
}
const pretifyDate=(date)=>{
    const myNewDate=date.split("-");
    return`${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`
};
const fadeNote=()=>{
    var lastIndex=taskList.length-1
    var elDiv= document.getElementById(`task${lastIndex}`);
    elDiv.classList.add("fade");
}
const removeTask=(index)=>{
    taskList.splice(index,1)
    localStorage.setItem(`myData`,JSON.stringify(taskList));
    creatTasks();
}
checkforData();
