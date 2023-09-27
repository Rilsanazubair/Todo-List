const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something!");

    } else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let spanIcon = document.createElement("span");
        spanIcon.innerHTML = "\u00d7" ;
        list.appendChild(spanIcon);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI")
    {
        console.log(event.target.classList)
       event.target.classList.toggle("checked");
       saveData();
    }
    else if(event.target.tagName === "SPAN")
    {
          event.target.parentElement.remove();
          saveData();
          
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

inputBox.addEventListener("keypress", function(event){
       if(event.key === "Enter")
       {
          document.getElementById("add-btn").click();
       }
});