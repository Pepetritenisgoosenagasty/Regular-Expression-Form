function phoneFormat(phone) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
   return phone.replace(regex, '($1) $2-$3');
}

// EventListeners
document.querySelector('#name').addEventListener('input', validateName);
document.querySelector('#zip').addEventListener('input', validateZip);
document.querySelector('#email').addEventListener('input', validateEmail);
document.querySelector('#phone').addEventListener('input', validatePhone);
document.getElementById('phone').addEventListener('blur', e => {
    e.target.value = phoneFormat(e.target.value);
});


// Functions
function validateName() {
 
    const name = document.getElementById('name');
    const regex = /^[a-zA-Z ]{2,20}$/img;

    if (!regex.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const regex = /^[0-9]{5}(-[0-9]{4})?$/img;
    
    
    if (!regex.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
        zip.classList.add('is-valid');
    }
}


function validateEmail() {
    const email = document.querySelector('#email');
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,5}$/;
    
    if (!regex.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function validatePhone() {
    const phone = document.querySelector('#phone');
    const regex =  /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    
    if (!regex.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }

    
}