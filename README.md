# Web-Form-Validation with HTML,CSS and Javascript RegExp

## With a sign-up form that pops up as a modal

Web form validation:  

- using the HTML controls
- visual cues with CSS
- Regular Expressions with Javascript

I discovered that Regular Expressions work better if input files are defined with `type = "text"`.

```html
<input type="text" name="fname" id="fname" placeholder="First name" aria-label="First name" required>
```

In order to validate the form with RegExp I have created an array where I stored the functions that do the validation. I looped through all the functions, and if ALL of them return true, the sign in is successful. The extracted data from the inputs is stored into an object, and logged into the console.

```javascript
let fns = [];
let data = {};

logInForm.addEventListener("submit", (ev) => {
    ev.preventDefault(); // This prevents the default behaviour of forms
    for (let i = 0; i < fns.length; i++) {
        if (fns[i]() === false) {
            return;
        }
    }
    console.log("Verified data: ", data);
    logInForm.reset(); // This is to clear the inputs if loggin is succesful
    alert("You have succesfully logged in!") // And alert the user
    return true;
})
```

The RegExp for validating the password, to check wether it is at least 6 characters long and contains at least one uppercase letter, one lowercase letter, a number, and one non-alphanumeric character has been divided into three seperate conditionals for better readability:

```javascript
function process_Password() {
    let pass = signUpPass.value;
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let digit = /[0-9]/;
    let other = /[^a-zA-Z0-9]/;

    if (lowercase.test(pass) === false) {
        alertPassSignUp.style.display = "block"; // Alerts the user by diplaying a box under the input if any of the conditions has not been met
        return false;
    }
    if (uppercase.test(pass) === false) {
        alertPassSignUp.style.display = "block";
        return false;
    }
    if (digit.test(pass) === false) {
        alertPassSignUp.style.display = "block";
        return false;
    }
    if (other.test(pass) === false) {
        alertPassSignUp.style.display = "block";
        return false;
    }
    alertPassSignUp.style.display = "none"; // If conditions are met the box is removed.
    dataObj.password = pass; // And password data is added to the obejct
    return true;
}
```
