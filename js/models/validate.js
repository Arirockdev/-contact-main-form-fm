import { render } from "./render.js";

const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputEnquiry = document.getElementById('enquiry');
const inputRequest = document.getElementById('request');
const inputTextArea = document.getElementById('text-area');
const inputCheckbox = document.getElementById('check-box');
const form = document.querySelector('form');

const p = document.querySelectorAll('p');
p.forEach((item) => {
  item.classList.add('hidden');
  item.classList.add('alert');
});
export function validar() {
  const reg = /^[\w._-]+@[\w.-]+\.[\w]{1,}$/gmi;
  const validacion = reg.test(inputEmail.value);

  const errors = [];

  if (inputFirstName.value === '') {
    errors.push('first-name');
  }
  if (inputLastName.value === '') {
    errors.push('last-name');
  }
  if (inputEmail.value === '' || !validacion) {
    errors.push('email');
  }
  if (!inputEnquiry.checked && !inputRequest.checked) {
    errors.push('enquiry');
  }
  if (inputTextArea.value === '') {
    errors.push('text-area');
  }
  if (!inputCheckbox.checked) {
    errors.push('check-box');
  }

  p.forEach((item, index, arr) => {
    
    if(item.parentElement.querySelector('textarea') === inputTextArea){
      if(errors.includes('text-area')){
        item.classList.remove('hidden');
        inputTextArea.classList.add('alert-border');
      }else{
        item.classList.add('hidden');
        inputTextArea.classList.remove('alert-border');
      }
    }else{      
      const inputElement = item.parentElement.querySelector('input');
      if (inputElement && errors.includes(inputElement.id)) {
        item.classList.remove('hidden');
        inputElement.classList.add('alert-border');
      } else {
        item.classList.add('hidden');
        if (inputElement) {
          inputElement.classList.remove('alert-border');
        }
      }
    }
    });
    
    render();
  form.reset();

  return errors.length === 0;
}

export function selectInput() {
  inputFirstName.addEventListener('click', (e) => {
    inputFirstName.classList.remove('alert-border');
    inputFirstName.parentElement.nextElementSibling.classList.add('hidden');
  });

  inputLastName.addEventListener('click', (e) => {
    inputLastName.classList.remove('alert-border');
    inputLastName.parentElement.nextElementSibling.classList.add('hidden');
  });

  inputEmail.addEventListener('click', (e) => {
    inputEmail.classList.remove('alert-border');
    inputEmail.parentElement.nextElementSibling.classList.add('hidden');
  });

  inputTextArea.addEventListener('click', (e) => {
    inputTextArea.classList.remove('alert-border');
    inputTextArea.parentElement.nextElementSibling.classList.add('hidden');
  });

  inputCheckbox.addEventListener('click', (e) => {
    inputCheckbox.classList.remove('alert-border');
    inputCheckbox.parentElement.nextElementSibling.classList.add('hidden');
  });

  return true; 
}
