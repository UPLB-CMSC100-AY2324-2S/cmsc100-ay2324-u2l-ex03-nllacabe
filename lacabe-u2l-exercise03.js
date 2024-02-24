// Nicole Lacabe

// FUNCTION - checks if two passwords match and pass the given criteria
function validatePassword(password1, password2) {
    if (password1 !== password2) {
        return false;
    }

    if (password1.length < 8) {
        return false;
    }
    let hasNumber = false, hasUpperCase = false, hasLowerCase = false;

    // checks for number, uppercase, and lowercase characters
    for (let i = 0; i < password1.length; i++) {
        const char = password1[i];
        if (char >= '0' && char <= '9') { 
            hasNumber = true; // password has digit
        } else if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true; // password has uppercase letter
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true; // password has lowercase letter
        }
    }
    // returns true if password criteria is met, if not, then false
    return hasNumber && hasUpperCase && hasLowerCase;
}

// SAMPLE OUTPUT

// console.log(validatePassword("helloworld", "hello"));     // returns false
// console.log(validatePassword("hello", "hello"));         // returns false
// console.log(validatePassword("hello1234", "hello1234")); // returns false
// console.log(validatePassword("Hello1234", "Hello1234")); // returns true
// console.log(validatePassword("HELLO1234", "HELLO1234")); // returns false

// FUNCTION - returns a reversed string of the password
function reversePassword(password) {
    let reversedPassword = '';
    // iterates through each character in reverse order and concatenates
    for (let i = password.length - 1; i >= 0; i--) {
        reversedPassword += password[i];
    }
    return reversedPassword;
}

// FUNCTION - stores three parameters, reverses the password if its valid
function storePassword(name, password1, password2) {
    if (password1.length < 8 || password2.length < 8) { // checks if length is not sufficient
        console.log("Insufficient Number of Strings!");
        return;
    } else if (password1 !== password2) { // checks if the two passwords don't match
        console.log("Wrong Password!");
        return;
    } else if (!validatePassword(password1, password2)) { // checks if the password criteria is not met
        console.log("Invalid Password!");
        return;
    }
    // reverses the password if its valid
    const reversedPassword = reversePassword(password1);
    console.log({ name: name, newpassword: reversedPassword });
    
}

// SAMPLE OUTPUT 

// storePassword("John", "Pass1234", "Pass1234"); // returns {name: "John", newpassword:"4321ssaP"}
// storePassword("John", "pass1234", "pass1234"); // prompts “Invalid Password!”
// storePassword("John", "pass1234", "pass1234567"); //prompts “Wrong Password!”
// storePassword("John", "pass1", "pass1"); //prompts “Insufficient Number of Strings!”