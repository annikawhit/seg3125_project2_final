import {Link} from 'react-router-dom';

const Register = () => {
    return (  
        <div className="register">
            <h1>Register for an Art Class</h1>

            <h2>1. Class information:</h2>
            <table id="class_details">
                <tr><th>Class Name:</th><td>"test"</td></tr>
                <tr><th>Instructor:</th><td>"test"</td></tr>
            </table>

            <h2>2. Please select the date and time for the class:</h2>
            <div  id="block" className="responsive-container-block container  my-2">
                <div  id="block" className="responsive-container-block my-2">
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                            <table id="date_time">
                                <tr><th>Date:</th><td>"test"</td></tr>
                                <tr><th>Time:</th><td>"test"</td></tr>
                            </table>
                            <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="option1"  value="option1"></input>
                        </div>
                    </div>
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                            <table id="date_time">
                                <tr><th>Date:</th><td>"test"</td></tr>
                                <tr><th>Time:</th><td>"test"</td></tr>
                            </table>
                            <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="vet2" value="Johnny Campbell"></input>
                        </div>
                    </div>
                    <div id="cell" className="responsive-cell-block mb-4 col-9 col-md-4 card-container">
                        <div id="date_time_card" className="card">
                            <table id="date_time">
                                <tr><th>Date:</th><td>"test"</td></tr>
                                <tr><th>Time:</th><td>"test"</td></tr>
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
                        <input type="text" class="form-control" placeholder="First name"></input>
                    </div>
                    <div className="col-9 col-lg-5 col-xl-4">
                        <label for="LastName">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name"></input>
                    </div>
                </div>

                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-6 col-xl-5">
                        <label for="Email">Email</label>
                        <input type="text" className="form-control" placeholder="Email"></input>
                    </div>
                    <div className="col-9 col-lg-4 col-xl-3 mb-5">
                        <label for="Phone">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number"></input>
                    </div>
                </div>
            </form>

            <h2>4. Please enter your payment information:</h2>
            <form>
                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-7 col-xl-6">
                        <label for="Name">Name on Card</label>
                        <input type="text" class="form-control" placeholder="Name on Card"></input>
                    </div>
                    <div className="col-9 col-lg-3 col-xl-2">
                        <label for="ExpDate">Exp Date</label>
                        <input type="text" class="form-control" placeholder="Exp Date"></input>
                    </div>
                </div>

                <div className="row align-items-start justify-content-center my-2">
                    <div className="col-9 col-lg-7 col-xl-6">
                        <label for="CardNumber">Card Number</label>
                        <input type="text" className="form-control" placeholder="Card Number"></input>
                    </div>
                    <div className="col-9 col-lg-3 col-xl-2 mb-5">
                        <label for="CVV">CVV</label>
                        <input type="text" className="form-control" placeholder="CVV"></input>
                    </div>
                </div>
            </form>

            <Link class="btn btn-dark" id="register_btn" to="/seg3125_project2_final/confirmation">Register</Link>
        </div>
    );
}

export default Register;