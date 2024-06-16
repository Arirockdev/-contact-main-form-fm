import { validar } from "./validate.js";
import { changeRadioButton } from "./radio-buttons.js";
import { selectInput } from "./validate.js";

const divSend = document.querySelector('.div-send');

export function sendMessagge () {

  const isValid = validar();
  const isChangeRadio = changeRadioButton();
  const isSelect = selectInput();

  if(isValid && isChangeRadio && isSelect){
    
    divSend.classList.add('send');
    
  }else{
   
    divSend.classList.remove('send')
  }

}
