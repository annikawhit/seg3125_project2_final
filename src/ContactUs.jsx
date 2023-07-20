import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ContactUs = () => {

    const defaultProps = {
        center: {
        lat: 45.4231,
        lng: -75.6831
        },
        zoom: 11
    };

    return (  
        <div className="contactus">
            <h1>Contact Us</h1>

            <div className="row align-items-start justify-content-center my-2" id="contact">
                            
                <div className="col-9 col-lg-5 col-xl-4" id="contactus_table1">
                    <h4>Hours of Operation</h4>
                    <table id="contact_table">
                        <tr><th>Monday</th><td>10am - 7pm</td></tr>
                        <tr><th>Tuesday</th><td>10am - 7pm</td></tr>
                        <tr><th>Wednesday</th><td>10am - 7pm</td></tr>
                        <tr><th>Thursday</th><td>10am - 7pm</td></tr>
                        <tr><th>Friday</th><td>10am - 9pm</td></tr>
                        <tr><th>Saturday</th><td>10am - 5pm</td></tr>
                        <tr><th>Sunday</th><td>10am - 5pm</td></tr>
                    </table>
                </div>
                
                <div className="col-9 col-lg-5 col-xl-4" id="contactus_table2">
                    <h4>Address</h4>
                    <table id="address">
                        <tr><td>1000 Airport Parkway Private</td></tr>
                        <tr><td>Ottawa, Ontario</td></tr>
                        <tr><td>K1V 9B4</td></tr>
                    </table>

                    <table id="email_phone">
                        <tr><th>Email:</th><td>contactus@imagineartstudio.ca</td></tr>
                        <tr><th>Phone:</th><td>613-456-7890</td></tr>
                    </table>
                </div>
            </div>

            <div style={{ height: '100vh', width: '70%', marginLeft:'auto', marginRight:'auto'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={45.3556599}
                        lng={-75.6226982}
                        text="Imagine Art Studio"
                        />
                </GoogleMapReact>
            </div>


        </div>
    );
}

export default ContactUs;