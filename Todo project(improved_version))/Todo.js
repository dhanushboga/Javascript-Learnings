 const todoarray = ["html","css"];
  displayTodos();

 function displayTodos(){
 let todoElements = "";

    for(let i=0;i<todoarray.length;i++)
      {
          const item = todoarray[i];
          const html = `<p>
                       ${item}
                       <button onclick="
                       todoarray.splice(${i},1);
                       displayTodos();
                       ">Delete</button> 
                       </p>`;

          todoElements =  todoElements + html;
           }
 document.querySelector('.js-todos').innerHTML = todoElements;

 }
 
 
 
 function addTodo(){
    
     const inputElement = document.querySelector('.js-input');
     const dateElement = document.querySelector('.js-date');
     
     const inputValue = inputElement.value;
     const dateValue = dateElement.value;
     
     console.log(inputValue);
     todoarray.push({name:inputValue,dueDate: dateValue});

     console.log(todoarray);
     displayTodos();
     inputElement.value = "";
    
      
   }
    