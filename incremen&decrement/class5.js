let value = 0;
 document.getElementById("incrementButton").addEventListener("click", function() {
   ++value;
   updateValue();
 });
 document.getElementById("decrementButton").addEventListener("click", function() {
   --value;
   updateValue();
 });
 function updateValue() {
   document.getElementById("value").innerText = value;
 
document.getElementById("value").style.color = value % 2 === 0 ? "blue" : "red";
 }

