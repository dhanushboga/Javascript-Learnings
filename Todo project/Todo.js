 const todoarray = [];
    function addTodo(){

    const inputElement = document.querySelector('.js-input');
     const inputValue = inputElement.value;
     console.log(inputValue);
     todoarray.push(inputValue);
     console.log(todoarray);
     inputElement.value = "";
    }