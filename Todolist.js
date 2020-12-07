//add function
function addTodo(){
    var inputField = document.getElementById("main");
    var inputVal = document.getElementById("main").value;
    var ul = document.querySelector(".list");
   if(inputField.value !=="" && inputField.value !== Number){
    var li = document.createElement("li");
    li.classList.add("item");
    main.value = "";
    li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("remove");
    deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
    li.appendChild(deleteButton);
    event.preventDefault();
} else {
    alert("Please enter a valid todo");
    event.preventDefault();
};
};

//delete function
function remove(event){
   var targetInput = event.target;
   if(targetInput.classList[0]==='remove'){
    targetInput.parentNode.remove();
 }
}
//Event Listeners
var addButton = document.getElementById('add').addEventListener("click",addTodo);
document.addEventListener('Keypress',function(event){
    if(event.keycode === 13 || event.which === 13){
        addTodo();
    }
})  
var deleteItem = document.querySelector('.list').addEventListener("click",remove);
