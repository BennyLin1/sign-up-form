const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');

const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const emailError = document.querySelector('#emailError');
const phoneNumberError = document.querySelector('#phoneNumberError');

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter in a valid Email. eg(Ben@mail.com)';
    } else {
        emailError.textContent = '';
    }
}); 

phoneNumber.addEventListener("input", ()=>{
    if(phoneNumber.validity.patternMismatch){
        phoneNumberError.textContent = "Please enter a valid 10 digit phone number";
    } else {
        phoneNumberError.textContent = "";
    }
});

password.addEventListener("input", ()=> {
    if (password.validity.patternMismatch){ // If these is a mismatch
        const currentValue = password.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;

        let errorText = '';
        if (regExpCap.test(currentValue) == false){ // Case for atleast 1 capital
          errorText += 'Missing at least 1 capital letter\n';
        } 

        if (regExpDig.test(currentValue) == false){ // Case for atleast 1 digit
            errorText += 'Missing at least 1 number\n';
        } 

        if (currentValue.length < 6){ // Case for less than 6 characters
          errorText += 'Password must be at least 6 characters\n';
        } 
        passwordError.textContent = errorText;

      } else {
        passwordError.textContent = '';
      }
});

confirmPassword.addEventListener("input", () =>{
    if (confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "Password do not match";
    } else {
        confirmPasswordError.textContent = "";
    }
});