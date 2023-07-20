import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import Confirmation from './Confirmation';
import { Validation } from './Validation';

const Register = () => {
    const [errors, setErrors] = useState({})

    function completeRegistration(event) {
        event.preventDefault()
        setErrors(Validation(values));
        if(errors.isValid === true){
        }
    }; 

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ccNumber: '',
        exp: '',
        cvv: '',
        ccName: '',
        isValid: true
    });


    function modifyInputField(event){
        const obj = {...values, [event.target.name]: event.target.value}
        setValues(obj)
    }



    return (  
        <div className="register">
            <h1>Register for an Art Class</h1>
            <h2>1. Class information:</h2>
            <table id="details_table">
                <tr><th>Class Name:</th><td>"test"</td></tr>
                <tr><th>Instructor:</th><td>"test"</td></tr>
            </table>

            <h2>2. Please select the date and time for the class:</h2>
            <div  id="block" className="responsive-container-block container  my-2">
                <div  id="block" className="responsive-container-block my-2">
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                            <table id="date_time">
                                <p>Date/Time Option 1:</p>
                                <p>"test"</p>
                            </table>
                            <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="option1"  value="option1"></input>
                        </div>
                    </div>
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                        <table id="date_time">
                                <p>Date/Time Option 2:</p>
                                <p>"test"</p>
                            </table>
                            <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="vet2" value="Johnny Campbell"></input>
                        </div>
                    </div>
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                        <table id="date_time">
                                <p>Date/Time Option 3:</p>
                                <p>"test"</p>
                            </table>
                            <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="vet3"  value="Kathleen Cho"></input>
                        </div>
                    </div>
                </div>
            </div>

            <h2>3. Please enter your information:</h2>
            <form>
                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-5 col-xl-4">
                        <label for="FirstName">First Name</label>
                        <input type="text" name='firstName' value={values.firstName} onChange={modifyInputField} class="form-control" placeholder="First name"></input>
                        {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}
                    </div>
                    <div className="col-9 col-lg-5 col-xl-4">
                        <label for="LastName">Last Name</label>
                        <input type="text" name='lastName' value={values.lastName} onChange={modifyInputField} class="form-control" placeholder="Last name"></input>
                        {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
                    </div>
                </div>

                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-6 col-xl-5">
                        <label for="Email">Email</label>
                        <input type="text" name='email' value={values.email} onChange={modifyInputField} className="form-control" placeholder="Email (example@example.ca)"></input>
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    </div>
                    <div className="col-9 col-lg-4 col-xl-3 mb-5">
                        <label for="Phone">Phone Number</label>
                        <input type="text" name='phone' value={values.phone} onChange={modifyInputField} className="form-control" placeholder="Phone Number (9999999999)"></input>
                        {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
                    </div>
                </div>
            </form>

            <h2>4. Please enter your payment information:</h2>
            <form>
                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-7 col-xl-6">
                        <label for="Name">Name on Card</label>
                        <input type="text" name='ccName' value={values.ccName} onChange={modifyInputField} class="form-control" placeholder="Name on Card"></input>
                        {errors.ccName && <p style={{color: "red"}}>{errors.ccName}</p>}
                    </div>
                    <div className="col-9 col-lg-3 col-xl-2">
                        <label for="ExpDate">Exp Date</label>
                        <input type="text" name='exp' value={values.exp} onChange={modifyInputField} class="form-control" placeholder="Exp Date (MMYY)"></input>
                        {errors.exp && <p style={{color: "red"}}>{errors.exp}</p>}
                    </div>
                </div>

                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-7 col-xl-6">
                        <label for="CardNumber">Card Number</label>
                        <input type="text" name='ccNumber' value={values.ccNumber} onChange={modifyInputField} className="form-control" placeholder="Card Number (9999999999999999)"></input>
                        {errors.ccNumber && <p style={{color: "red"}}>{errors.ccNumber}</p>}
                    </div>
                    <div className="col-9 col-lg-3 col-xl-2 mb-5">
                        <label for="CVV">CVV</label>
                        <input type="text" name='cvv' value={values.cvv} onChange={modifyInputField} className="form-control" placeholder="CVV (999)"></input>
                        {errors.cvv && <p style={{color: "red"}}>{errors.cvv}</p>}
                    </div>
                </div>
            </form>

            <Link class="btn btn-dark" onClick={completeRegistration} id="register_btn">Register</Link>
        </div>
    );
}

export default Register;