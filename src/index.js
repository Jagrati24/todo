import '../assets/css/reset.css';
import '../assets/css/main.css';



// var tagBtn = document.querySelector(".add-tag-btn");
// var tagBox = document.querySelector(".add-tag-popup");
var editBox = document.querySelector(".edit-task-popup");
var newBtn = document.querySelector(".new-task-button");
var newBox = document.querySelector(".new-task-popup");
var taskList = document.querySelector(".tasklist");
// const tagForm = document.forms.addtag;
const editForm = document.forms.edittask;
const newForm = document.forms.newtask;

const ename=editForm.elements.taskname;
const edesc=editForm.elements.taskdesc;
const edate=editForm.elements.date;
const ehour=editForm.elements.hour;
const emin=editForm.elements.min;
const etime=editForm.elements.time;
// const ecoloursec=newForm.elements.colours;
// const save=editForm.elements.save;
const tname=newForm.elements.taskname;
const tdesc=newForm.elements.taskdesc;
const tdate=newForm.elements.date;
const thour=newForm.elements.hour;
const tmin=newForm.elements.min;
const ttime=newForm.elements.time;
// const ttag=newForm.elements.tag;
// const tcoloursec=newForm.elements.colours;
var tasks=[];
// let task={};

// var newTag= [] 
// addTag.onclick = function ()
// {
//     tagBox.style.display= "block";
// }

function closeBox()
{
    newForm.reset();
    newBox.style.display= "none";
    editForm.reset();
    editBox.style.display= "none";
}

function showBox(box)
{
    closeBox();
    box.style.display= "block";
    console.log("yes");
}

// function addTag()
// {
//     event.preventDefault();
//     if(this.keyCode === 13)
//     {
//         tagBox.style.display="none";
//     }
// }

function submitTask(tasks)
{
    /* eslint-disable no-debugger */
    // debugger;
    /* eslint-enable no-debugger */

    // console.log(task);
    let finalTask = ``;
    tasks.forEach((task,index) => {
    finalTask += `
        <li class="tasks" id="${index}">
            <input type="radio" id="task" name="radio">
            <div class="task-details">
                <div class=tdline-1>
                    <div class="task-name">${task.name}</div>
                    <div class="task-desc">${task.desc}</div>
                </div>
                <div class="tdline-2">
                    <div class="due">Due on</div>
                    <div class="time">${task.hr}:${task.min}${task.time}</div>
                    <div><button class="edit" id="${index}">Edit</button></div>
                </div>
            </div>
        </li>
    `;
    });
    taskList.innerHTML = finalTask;
        /* eslint-disable no-debugger */
        debugger;
    /* eslint-enable no-debugger */
     closeBox();
    var editBtns = document.querySelectorAll(".edit");
    editBtns.forEach((btn,index) =>
    {
        btn.addEventListener('click',() => showBox(editBox));
         /* eslint-disable no-debugger */
         debugger;
         /* eslint-enable no-debugger */
        editForm.addEventListener('submit',() => editTask(index));
    });
    // showEditTask();

}

// function showEditTask(editBox)
// {   
//     // event.preventDefault();
//     showBox(editBox);
//     editForm.addEventListener('submit',() => editTask());
// }

// function removeTask(index)
// {
//     /* eslint-disable no-debugger */
//     debugger;
//     /* eslint-enable no-debugger */
//     event.preventDefault();
//     tasks.splice(index,1);
//     submitTask(tasks);
// }

// function showEditTask()
// {
//     // event.preventDefault();
    
        
//         // console.log(editBtns);
//         // console.log('yes');
// }

function editTask(index)
{
    // tagBox.addEventListener('keyup',addTag);
    // closeBox();
    // showBox(editBox);
    event.preventDefault();

    // const rmvBtns = document.querySelectorAll(".remove-task");
    // rmvBtns.forEach((rmv,index) =>
    // {
    //     rmv.addEventListener('dblclick',() => removeTask(index));
    // }
    // );
    let name = ename.value.trim();
    let desc = edesc.value.trim();
    let date;
    edate.forEach((option) => {
        if (option.checked)
            date=option.value;
    }
    );
    let hr = ehour.value.trim();
    let min = emin.value.trim();
    // /* eslint-disable no-debugger */
    //     debugger;
    // /* eslint-enable no-debugger */
    let time;
    etime.forEach((option) => {
        if (option.checked)
            time=option.value;
    }
    );

    tasks[index] = 

    {
        name, desc, date, hr, min, time
    };
    console.log("Array:"+tasks);
    console.log("Index:"+index);
    console.log("Edited Task:"+tasks[index]);
    // submitTask(tasks);
}

function addTask()
{
    /* eslint-disable no-debugger */
    debugger;
    /* eslint-enable no-debugger */
    event.preventDefault();
    const name = tname.value.trim();
    const desc = tdesc.value.trim();
    let date; 
    tdate.forEach((option) => {
        if (option.checked)
            date=option.value;
    }

    );
    const hr = thour.value.trim();
    const min = tmin.value.trim();
    let time; 
    // /* eslint-disable no-debugger */
    //     debugger;
    // /* eslint-enable no-debugger */
    ttime.forEach((option) => {
        if (option.checked)
            time=option.value;
    }
    );
    // let tag;
    // ttag.forEach((option) => {
    //     if(option.checked)
    //         tag=option.value;
    // }
    // );

    // if (this.className === ''
    // const  complete=false;
    // colours.forEach((colour) => {
    //     if(colour.selected == true)
    //         tcolour=colour.value;
    // }
    // );
    tasks=
    [
        ...tasks,
        {
            name, desc, date, hr, min, time
        }  
    ];
    submitTask(tasks);
}



function init()
{
    
    /* eslint-disable no-debugger */
        debugger;
    /* eslint-enable no-debugger */  
    // tagBtn.addEventListener('click',() => showBox(tagBox));
    // tagForm.addEventListener('submit',(event) => addTag(event));
    newBtn.addEventListener('click',() => showBox(newBox));
    newForm.addEventListener('submit',() => addTask());
    // showEditTask();
    // editForm.addEventListener('submit',() => editTask(index));
    // editBtn.addEventListener('click',() => showBox(editBox));
    // editForm.addEventListener('submit',() => editTask(taskList));
    // editBtn.addEventListener('click',editTask);
    
         
}

init();
