export function Validation(values){
    const errors = {}
    const emailFormat = /\S+@\S+\.\S+/;
    const cvvFormat = /^\d{3}$/;
    const ccNumberFormat = /^\d{16}$/;
    const expFormat = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const phoneFormat = /^([0-9]{10})$/;
    const nameFormat = /^[a-zA-Z]+$/;
    const ccNameFormat = /^[a-zA-Z]+ [a-zA-Z]+$/;
    errors.isValid = true;

    if(values.firstName === "") {
        errors.firstName = ("First name is required");
        errors.isValid = false;
    }

    else if(!nameFormat.test(values.firstName)) {
        errors.firstName = ("Invalid first name. Please enter a valid first name (no digits, spaces or special characters).");
        errors.isValid = false;
    }

    if(values.lastName === "") {
        errors.lastName = ("Last name is required");
        errors.isValid = false;
    }

    else if(!nameFormat.test(values.lastName)) {
        errors.lastName = ("Invalid last name. Please enter a valid last name (no digits, spaces or special characters).");
        errors.isValid = false;
    }

    if(values.email === "") {
        errors.email = ("Email is required");
        errors.isValid = false;
    }

    else if(!emailFormat.test(values.email)) {
        errors.email = ("Invalid email. Please enter a valid email address (example@example.ca).");
        errors.isValid = false;
    }

    if(values.phone === "") {
        errors.phone = ("Phone number is required");
        errors.isValid = false;
    }

    else if(!phoneFormat.test(values.phone)) {
        errors.phone = ("Invalid phone number. Please enter a valid phone number (9999999999).");
        errors.isValid = false;
    }

    if(values.ccName === "") {
        errors.ccName = ("Name on credit card is required");
        errors.isValid = false;
    }

    else if(!ccNameFormat.test(values.ccName)) {
        errors.ccName = ("Invalid credit card holder name. Please enter a valid credit card holder name (format: first last).");
        errors.isValid = false;
    }

    if(values.exp === "") {
        errors.exp = ("Expiration date is required");
        errors.isValid = false;
    }

    else if(!expFormat.test(values.exp)) {
        errors.exp = ("Invalid expiration date. Please enter a valid expiration date for the credit card (MMYY).");
        errors.isValid = false;
    }

    if(values.ccNumber === "") {
        errors.ccNumber = ("Credit card number is required");
        errors.isValid = false;
    }

    else if(!ccNumberFormat.test(values.ccNumber)) {
        errors.ccNumber = ("Invalid credit card number. Please enter a valid credit card number. (9999999999999999)");
        errors.isValid = false;
    }

    if(values.cvv === "") {
        errors.cvv = ("CVV is required");
        errors.isValid = false;
    }

    else if(!cvvFormat.test(values.cvv)) {
        errors.cvv = ("Invalid CVV. Please enter a valid CVV code (999).");
        errors.isValid = false;
    }
    return errors;

}