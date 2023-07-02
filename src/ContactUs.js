const ContactUs = () => {
    return (  
        <div className="contactus">
            <h1>Contact Us</h1>

            <div className="rowContactUs" id="contact">
                            
                <div id="contactus_table1">
                    <h4>Hours of Operation</h4>
                    <table>
                        <tr><th>Monday</th><td>10am - 7pm</td></tr>
                        <tr><th>Tuesday</th><td>10am - 7pm</td></tr>
                        <tr><th>Wednesday</th><td>10am - 7pm</td></tr>
                        <tr><th>Thursday</th><td>10am - 7pm</td></tr>
                        <tr><th>Friday</th><td>10am - 9pm</td></tr>
                        <tr><th>Saturday</th><td>10am - 5pm</td></tr>
                        <tr><th>Sunday</th><td>10am - 5pm</td></tr>
                    </table>
                </div>
                
                <div id="contactus_table2">
                    <h4>Address</h4>
                    <table id="address">
                        <tr><td>75 Laurier Ave E</td></tr>
                        <tr><td>Ottawa, Ontario</td></tr>
                        <tr><td>K1N 6N5</td></tr>
                    </table>

                    <table>
                        <tr><th>Email:</th><td>contactus@imagineartstudio.ca</td></tr>
                        <tr><th>Phone:</th><td>613-456-7890</td></tr>
                    </table>
                </div>
            </div>

            
        </div>
    );
}

export default ContactUs;