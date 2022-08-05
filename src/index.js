import validator from './validator.js';

let ccNumber;
document.getElementById("ok").addEventListener("click",take);

function take() {
  ccNumber = document.getElementById("cNumber").value;
  let numeroalert = validator.maskify(ccNumber);
  if(ccNumber!=""){
    
      let valid = validator.isValid(ccNumber);
      if(valid==true){
        alert ("Cartão válido" + " número: " +  numeroalert)
      }else{
        alert ("Cartão invalido" + " número: " +  numeroalert)
      }
      return numeroalert;
    }
    }

document.getElementById("ok").addEventListener("click",camuflar);

function camuflar(){
  ccNumber = document.getElementById("card").value;
  alert(validator.maskify(ccNumber) );
} 
