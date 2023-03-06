
document.getElementById("tArea").innerHTML=localStorage.getItem("hello");
    
 
    function addTask(){            
        let x=document.getElementById("tskin").value;
       document.getElementById("tArea").value += x;
       document.getElementById("tskin").value="";
       localStorage.setItem("hello",document.getElementById("tArea").value );
       
       
    }
    function clearTask(){
       
       document.getElementById("tArea").value="";
       
    }

// const addTaskButton = document.getElementById("add-task");
//     const clearTaskButton = document.getElementById("clear-task");
//     const taskListTextarea = document.getElementById("task-list");
//     const taskInput = document.getElementById("task");

//     addTaskButton.addEventListener("click", function() {
//       const newTask = taskInput.value;
//       if (newTask.trim() !== "") {
//         taskListTextarea.value += "- " + newTask + "\n";
//         taskInput.value = "";
//       }
//     });

//     clearTaskButton.addEventListener("click", function() {
//       taskListTextarea.value = "";
//       taskInput.value = "";
//     });