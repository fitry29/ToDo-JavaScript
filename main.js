
let todoItems = [];

todoInput = document.getElementById("todo");
goBtn = document.getElementById("submit-btn");
orderList = document.getElementById("order-list");


goBtn.addEventListener("click", ()=>{
    formValidation();
    todoInput.value = "";
    displayItem();
    
    alert(todoItems);
    document.getElementById("array").innerHTML = todoItems;
    
});

function formValidation(){
    if(todoInput.value !== ""){
        todoItems.push(todoInput.value);
    }
    else{
        alert("Please enter something");
    }
}


function displayItem(){
    orderList.innerHTML = "";

    todoItems.forEach(function(n,i){
        orderList.innerHTML += `<li><div id="todo-list">
        <p id="list-item${i}">${n.charAt(0).toUpperCase() + n.slice(1)}</p>
            
        <div id="list-btn"> 
            <button id="btn" class = "material-symbols-outlined" onclick = "pressButton(${i});" >done</button>
            <button id="btn" class = "material-symbols-outlined" onclick = "editItem(${i})">edit</button>
            <button id="btn" class = "material-symbols-outlined" onclick = "deleteToDo(${i});">remove</button>
        </div>
    </div></li>`;
    });
    

    // for(i = 0; i<todoItems.length; i++){  
    //     nodeLi.innerHTML = 
    //     `<div id="todo-list">
    //         <p id="list-item${i}">${todoItems[i].charAt(0).toUpperCase() + todoItems[i].slice(1)}</p>
                
    //         <div id="list-btn"> 
    //             <button id="done-btn" class = "material-symbols-outlined" onclick = "pressButton(${i});">done</button>
    //             <button id="delete-btn" class = "material-symbols-outlined" onclick = "deleteToDo(${i});">remove</button>
    //         </div>
    //     </div>`;
    // }
    // orderList.append(nodeLi);
}

function pressButton(index){
    alert(index);
    // alert("Button for index: " + index);
    textTodo = document.getElementById(`list-item${index}`)
    if(textTodo.style.textDecoration != "line-through"){
        textTodo.style.textDecoration = "line-through";
    }
    else{
        textTodo.style.textDecoration = "none";
    }
    document.getElementById("array").innerHTML = todoItems;
}

function deleteToDo(index){
    btn = document.getElementById("delete-btn");
    alert(todoItems[index]);

    todoItems.splice(index, 1);
    displayItem();

    // orderList.removeChild(orderList.children[index]);
    document.getElementById("array").innerHTML = todoItems;
}

function editItem(index){
    var newVal = prompt(`Edit this`);

    todoItems.splice(index, 1 , newVal);
    displayItem();
    document.getElementById("array").innerHTML = todoItems;
}
