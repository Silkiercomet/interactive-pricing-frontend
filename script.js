let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let price = document.querySelector(".number");
let price2 = document.querySelector(".number2");

let x = 0;

output.innerHTML = slider.value; 


slider.oninput = function() {
  let check = document.getElementById("switcher");

  output.innerHTML = this.value ;
  priceChange(price);
  priceChange(price2);

  if(check.checked == true){
  checkBox();
  }
  
  }

const priceChange = (z) =>{
  if(output.innerHTML >= 10){
    x=1;
    z.innerHTML = '$8.00';
  } 
  if(output.innerHTML >= 50){
    x=2;
    z.innerHTML = '$12.00';
  } 
  if(output.innerHTML >= 100){
    x=3;
    z.innerHTML = '$16.00';
  }
  if(output.innerHTML >= 500){
    x=4;
    z.innerHTML = '$24.00';
  }
  if(output.innerHTML >= 1000){
    x=5;
    z.innerHTML = '$36.00';  
  }
}

const checkBox = () => {
  let check = document.getElementById("switcher");
  if(check.checked == true){
    switch(x){
      case 0:
        price.innerHTML = '$6.00'
        price2.innerHTML = '$6.00'
        break;
      case 1:
        price.innerHTML = '$6.00'
        price2.innerHTML = '$6.00'
        break;
      case 2:
        price.innerHTML = '$9.00'
        price2.innerHTML = '$9.00'
        break;
      case 3:
        price.innerHTML = '$12.00'
        price2.innerHTML = '$12.00'
        break;
      case 4:
        price.innerHTML = '$18.00'
        price2.innerHTML = '$18.00'
        break;
      case 5:
        price.innerHTML = '$28.00'
        price2.innerHTML = '$28.00'
        break;
    }
    }else{
      priceChange(price)
      priceChange(price2)
    }   
}
