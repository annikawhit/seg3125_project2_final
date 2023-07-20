import {Link} from 'react-router-dom';

const Confirmation = ({registrationData}) => {

    const bookingID = Math.floor(Math.random() * (99999 - 10000) + 10000);

    return (  
        <div className="confirmation">
            <h1>Thank you for registering for a class with us!</h1>

            <div class="text-center" id="subtitle">
                <h2>Your booking has been confirmed.</h2>
            </div>

            <div class="my-5">
                <table id="booking_table">
                    <tr><th>Booking #:</th><td>{bookingID}</td></tr>
                    <tr><th>Class:</th><td>test</td></tr>
                    <tr><th>Instructor:</th><td>test</td></tr>
                    <tr><th>Date/Time:</th><td>test</td></tr>
                </table>
            </div>  

        </div>
    );
}

export default Confirmation;