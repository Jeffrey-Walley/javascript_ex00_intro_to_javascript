// DOM (Document Object Model)

//SINGLE ELEMENT SELECTORS

// console.log(document.getElementById('my-form')); // document is the key way to call this
// const form = document.getElementById('my-form');
// console.log(form);
/* console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container')); */

// MULTIPLE ELEMENT SELECTORS

// console.log(document.querySelectorAll('.item')); // gives Nodelist

// LOOP through with ELEMENT SELECTORS

/* const items = document.querySelectorAll('.items');
items.forEach((item) => console.log(item)); */

// MANIPULATING the DOM
// const btn = document.querySelector('.btn');
// ul.lastElementChild.remove(); // removes the last of li items
// ul.firstElementChild.textContent = 'Hello'; //change 1st li item text to Hello

/* const btn = document.querySelector('.btn');
btn.style.background = 'red'; */ // changed the button to red

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'; // turns form dark on button click
    document.querySelector('body').classList.add('bg-dark'); // makes the Body dark on button click
    document.querySelector('.items').lastElementChild.innerHTML.index = '<h1>HELLO</h1>';
}); */

// FORM Example

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // form validation so both forms must be filled output
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter all Fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}