import React from "react";

const Contact = () => {

    return (
        <div>
            <h1>Contact</h1>
            <div>
                <a onClick={() => window.location.href = 'https://pt.airbnb.com/rooms/36148785?check_in=2022-09-13&check_out=2022-09-16&federated_search_id=a5ab6bcd-30fe-4b53-863e-674111cd7b02&source_impression_id=p3_1654103823_7K7R7VDf43ie34ey'}>Airbnb</a>
            </div>
            <div>
                <a onClick={() => window.location.href = 'https://www.booking.com/hotel/pt/casa-do-sr-paulo.pt-pt.html'}>Booking.com</a>
            </div>
        </div>
    )
}

export default Contact;