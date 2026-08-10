 const todoarray = [
  {
    name:"html",
    dueDate:"2022-12-22",
  },

  {
    name: "css",
    dueDate: "2022-12-22",
  }

  ];

 function displayTodos(){

  let todoElements = "";

 for(let i=0;i<todoarray.length;i++){
  const item = todoarray[i];
  //const name = itemObject.name;
 // const dueDate =  itemObject.dueDate;
  const {name,dueDate} = itemObject;
  const html = `<p>
               ${name} ${dueDate}
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
     todoarray.push({name:inputValue,dueDate:inputValue});

     console.log(todoarray);
     displayTodos();
     inputElement.value = "";
    
      
   }
    