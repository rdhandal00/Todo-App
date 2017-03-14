const add=document.getElementById('addTodo');
add.addEventListener('click',function(){
    let value=document.getElementById('addTodoItem').value;
    if (value){
        addtolist(value);
    }
});
function addtolist(by){       
    let element=document.createElement('li');
    element.innerText=by;
    let ux=document.getElementById('todoList');
    ux.appendChild(element);
   let omit=document.createElement('button');
    omit.style.border='none';
  
    omit.classList.add('remove');
    omit.innerText='delete';
    element.appendChild(omit);
    omit.addEventListener('click',removeitem);
    element.addEventListener('click',completeitem);
}                                                                           

 function removeitem(){   
    let item=this.parentNode;
    let parent=item.parentNode;
    parent.removeChild(item);
}
 // save data to local storage
 function savetodos() {
      let str = JSON.stringify(todos);
      localStorage.setItem("todos", str);
 }






function completeitem(){
    let item=this;
    item.style.textDecoration = 'line-through';
    item.addEventListener('click',incompleteitem);
    function incompleteitem() {
    if(item.style.textDecoration =='line-through'){
        item.style.textDecoration ='none';
    }
    else{
        item.style.textDecoration ='line-through';
    }
}
}



   
    













