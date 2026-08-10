 const todoarray = [];

 function displayTodos(){

  let todoElements = "";

 for(let i=0;i<todoarray.length;i++){
  const item = todoarray[i];
  const html = `<p>${item}</p>`

  todoElements =  todoElements + html;
 }
 document.querySelector('.js-todos').innerHTML = todoElements;

 }
 
 
 
 function addTodo(){
    
     const inputElement = document.querySelector('.js-input');
     const inputValue = inputElement.value;
     console.log(inputValue);
     todoarray.push(inputValue);
     console.log(todoarray);
     displayTodos();
     inputElement.value = "";
    
      
   }
    