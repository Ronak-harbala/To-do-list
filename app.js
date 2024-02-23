let input = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn");
const listContainer = document.querySelector(".list-container");


addBtn.addEventListener("click",()=>{
    if(input.value === ''){
        alert("You must write something !")
    }else{
        let li = document.createElement("li");
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "X"
        li.appendChild(span);
     }
     input.value = '';
     saveData();
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

// const saveData = ()=>{
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// const showTask = ()=>{
//     listContainer.innerHTML = localStorage.getItem("data");
// }

showTask();


