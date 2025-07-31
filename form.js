function validate(e) {
  e.preventDefault();

  const theForm = document.querySelector('#form');
  const button = theForm.querySelector('button');
  const fname = theForm.querySelector('#fname');
  const fnameError = theForm.querySelector('#fnameError');
  const lname = theForm.querySelector('#lname');
  const lnameError = theForm.querySelector('#lnameError');
  const age = theForm.querySelector('#age');
  const ageError = theForm.querySelector('#ageError');
  const email = theForm.querySelector('#email');
  const emailError = theForm.querySelector('#emailError');
  const phone = theForm.querySelector('#phone');
  const phoneError = theForm.querySelector('#phoneError');
  const password = theForm.querySelector('#password');
  const passwordError = theForm.querySelector('#passwordError');
  let submitForm = false;

  //disable button
  button.disabled = true

  //check if firstname is empty
  if (fname.value === '') {

    //Highlight empty input
    fname.style.borderColor = 'red';
    fnameError.innerHTML = `Firstname is required`;
    fnameError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  } else {
    //Reset border color
    fname.style.borderColor = 'green';

    //Reset error message
    fnameError.innerHTML = ``;
  }

  //check if Lastname is empty
  if (lname.value === '') {
    //Highlight empty input
    lname.style.borderColor = 'red';
    //Show the error
    lnameError.innerHTML = 'Lastname is required';
    lnameError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  } else {
    //Reset border color
    lname.style.borderColor = 'green';

    //Reset error message
    lnameError.innerHTML = ``;
  }


  //check if age is empty
  if (age.value === '') {
    //Highlight empty input
    age.style.borderColor = 'red';
    //Show the error
    ageError.innerHTML = 'Age is required';
    ageError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (isNaN(age.value)) {
    //Highlight empty input
    age.style.borderColor = 'red';
    //Show the error
    ageError.innerHTML = 'Age must be a number';
    ageError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (parseInt(age.value) < 18) {
    //Highlight empty input
    age.style.borderColor = 'red';
    //Show the error
    ageError.innerHTML = 'Age must not be less than 18';
    ageError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  } else {
    //Reset border color
    age.style.borderColor = 'green';

    //Reset error message
    ageError.innerHTML = ``;
  }


  //check if Email is empty
  if (email.value === '') {
    //Highlight empty input
    email.style.borderColor = 'red';
    //Show the error
    emailError.innerHTML = 'Email is required';
    emailError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  //Regex Check for gmail email
  else if (!email.value.match(/@gmail.com/)) {
    //Highlight empty input
    email.style.borderColor = 'red';
    //Show the error
    emailError.innerHTML = 'Email must be from gmail';
    emailError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else {
    //Reset border color
    email.style.borderColor = 'green';

    //Reset error message
    emailError.innerHTML = ``;
  }

  //check if phone is empty
  if (phone.value === '') {
    //Highlight empty input
    phone.style.borderColor = 'red';
    //Show the error
    phoneError.innerHTML = 'Phone is required';
    phoneError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (isNaN(phone.value)) {
    //Highlight empty input
    phone.style.borderColor = 'red';
    //Show the error
    phoneError.innerHTML = 'Phone must be a number';
    phoneError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (parseInt(phone.value.length) < 11) {
    //Highlight empty input
    phone.style.borderColor = 'red';
    //Show the error
    phoneError.innerHTML = 'Phone number must not be less than 11';
    phoneError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (parseInt(phone.value.length) > 11) {
    //Highlight empty input
    phone.style.borderColor = 'red';
    //Show the error
    phoneError.innerHTML = 'Phone number must not be greater than 11';
    phoneError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }

  else {
    //Reset border color
    phone.style.borderColor = 'green';

    //Reset error message
    phoneError.innerHTML = ``;
  }


  //check if password is empty
  if (password.value === '') {
    //Highlight empty input
    password.style.borderColor = 'red';
    //Show the error
    passwordError.innerHTML = 'Password is required';
    passwordError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else if (parseInt(password.value.length) < 8) {
    //Highlight empty input
    password.style.borderColor = 'red';
    //Show the error
    passwordError.innerHTML = 'Password must not be less than 8';
    passwordError.style.color = 'red';
    //enable the button again
    button.disabled = false;
  }
  else {
    //Reset border color
    password.style.borderColor = 'green';

    //Reset error message
    passwordError.innerHTML = ``;
  }

  //check if there are no errors and submit
  if (
    fnameError.innerHTML === '' &&
    lnameError.innerHTML === '' &&
    ageError.innerHTML === '' &&
    emailError.innerHTML === '' &&
    phoneError.innerHTML === '' &&
    passwordError.innerHTML === '') {
    alert('Form Submitted Successfully');
  }
}
