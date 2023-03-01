import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
'input',
throttle(e => {
    const formDate = { email: email.value, message: message.value };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
    }, 500)
);


form.addEventListener('submit', e => {

    e.preventDefault(); 

    if (email.value === '' || message.value === '') {
        alert('All fields of the form must be filled out');
        return false;
    };
    console.log({ email: email.value, message: message.value });

    form.reset(); 
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
    try {
    const currentDate = localStorage.getItem(key); 

    return currentDate === null ? undefined : JSON.parse(currentDate);
    } catch (error) {

    console.error('Get state error: ', error.message);
    }
};

const storageData = load(LOCALSTORAGE_KEY);

if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
};
