let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let price = document.getElementById("number");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  if(output.innerHTML >= 10){
    price.innerHTML = '$16.00';
  } 
  if(output.innerHTML >= 500){
    price.innerHTML = '$26.00';
  } 
  if(output.innerHTML >= 1000){
    price.innerHTML = '$36.00';
  }
}