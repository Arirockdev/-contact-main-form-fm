import { render } from "./render.js";

const inputEnquiry = document.getElementById('enquiry');
const inputRequest = document.getElementById('request');
const form = document.querySelector('form');


export function changeRadioButton () {

  const radioItem = document.querySelectorAll('.radio__item');
  const alertParagraph =  inputEnquiry.nextElementSibling.parentElement.nextElementSibling.parentNode.nextElementSibling;
  
  let selUno;
  let selDos;
  radioItem.forEach((item, index, arr) => {
  selUno = arr[0];
  selDos = arr[1];
})
inputEnquiry.addEventListener('change', (e) => {
  
  selUno.classList.add('radio__item-selected');
  selDos.classList.remove('radio__item-selected');
  alertParagraph.classList.add('hidden');

})
selUno.classList.remove('radio__item-selected');
inputRequest.addEventListener('change', ()=> {

  selDos.classList.add('radio__item-selected');
  selUno.classList.remove('radio__item-selected');
  alertParagraph.classList.add('hidden');

})

selDos.classList.remove('radio__item-selected');


render();
form.reset();
  return true
}
changeRadioButton();