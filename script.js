let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let price = document.getElementById("number");
let price2 = document.getElementById("number-2");
let x = 0;

output.innerHTML = slider.value; // Display the default slider value


// var mq = window.matchMedia( "(max-width: 610px)" );
// if (mq.matches) {
    
// }
// else {
//     // window width is greater than 570px
// }



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  let check = document.getElementById("switcher");

  output.innerHTML = this.value ;
  priceChange();

  if(check.checked == true){
  checkBox();
  }
  
  }

const priceChange = () =>{
  if(output.innerHTML >= 10){
    x=1;
    price.innerHTML = '$8.00';
  } 
  if(output.innerHTML >= 50){
    x=2;
    price.innerHTML = '$12.00';
  } 
  if(output.innerHTML >= 100){
    x=3;
    price.innerHTML = '$16.00';
  }
  if(output.innerHTML >= 500){
    x=4;
    price.innerHTML = '$24.00';
  }
  if(output.innerHTML >= 1000){
    x=5;
    price.innerHTML = '$36.00';  
  }
}

const checkBox = () => {
  let check = document.getElementById("switcher");
  if(check.checked == true){
    switch(x){
      case 0:
        price.innerHTML = '$6.00'
        break;
      case 1:
        price.innerHTML = '$6.00'
        break;
      case 2:
        price.innerHTML = '$9.00'
        break;
      case 3:
        price.innerHTML = '$12.00'
        break;
      case 4:
        price.innerHTML = '$18.00'
        break;
      case 5:
        price.innerHTML = '$28.00'
        break;
    }
    }else{
      priceChange()
    }   
}
