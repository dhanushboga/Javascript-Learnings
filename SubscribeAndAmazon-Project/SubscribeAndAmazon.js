 function calculateEventKey(event){
        if(event.key === 'Enter'){
           amazonShippingCalculator();
        }
    }

    function amazonShippingCalculator(){
        const inputElement = document.querySelector(".js-input");
        let cost = Number(inputElement.value);
        

        if(cost < 100){
            cost = cost + 10;
        }
        
        document.querySelector(".js-amazon-cost").innerHTML = `${cost}/-`;
    }
   
    function subscribe(){
     const buttonElement = document.querySelector('.js-btn');
    
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed'
        buttonElement.classList.add("is_subscribed");
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove("is_subscribed");
    }
    
    }