 let quantity = 0;

     function showQuantity(){

        document.getElementById("demo").innerHTML = `Total Quantity: ${quantity}`;
        
     }

     function AddToCart(){
        quantity ++;
        document.getElementById("demo1").innerHTML = `Add to Cart: ${quantity}`;

     }

     function plus2(){
        quantity +=2;
        document.getElementById("demo2").innerHTML = `Plus2: ${quantity}`;
     }

     function plus3(){
        quantity +=3;
        document.getElementById("demo3").innerHTML = `Plus3: ${quantity}`;
     }


     function resetButton(){
        quantity = 0;
        
        
     }