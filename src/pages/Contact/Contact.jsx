import React from "react";
import Container from "react-bootstrap/Container";
import { SiAirbnb } from "react-icons/si"
import { TbBrandBooking, TbAt, TbBrandAirbnb } from 'react-icons/tb'
import './Contact.css';

const Contact = () => {

    return (
        <Container className="contact-container" id="contact">
            <div className="contact-content">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-button-wrapper">
                    <div className="contact-button-ind">
                        <TbBrandAirbnb className="contact-icons" stroke="#e9d856" size={50} onClick={() => window.open('https://pt.airbnb.com/rooms/36148785?check_in=2022-09-13&check_out=2022-09-16&federated_search_id=a5ab6bcd-30fe-4b53-863e-674111cd7b02&source_impression_id=p3_1654103823_7K7R7VDf43ie34ey', "_blank")}/>      
                        <p>Airbnb</p>
                    </div>
                    <div className="contact-button-ind">
                        <TbBrandBooking className="contact-icons" stroke="#e9d856" size={50} onClick={() => window.open('https://www.booking.com/hotel/pt/casa-do-sr-paulo.pt-pt.html?aid=304142&label=gen173rf-1FCAsouwFCEGNhc2EtZG8tc3ItcGF1bG9IH1gDaDuIAQGYAR-4AQfIAQzYAQHoAQH4AQKIAgGiAg5sb2NhbGhvc3Q6MzAwMKgCA7gCgpjulAbAAgHSAiQxMTRkYjRhYy00ZDZkLTRjOGEtODVhZi1iNTJkMGJhZTFiMmbYAgXgAgE&sid=fa65e68137de438d592365df79bde523&checkin=2022-10-04;checkout=2022-10-11;dest_id=-2170765;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1654361094;srpvid=dd2c75c2294303f8;type=total;ucfs=1&#no_availability_msg', '_blank')}/>
                        <p>Booking.com</p>
                    </div>  
                    <div className="contact-button-ind">
                        <TbAt className="contact-icons" stroke="#e9d856" size={50} />
                        <p>Talk with us</p>
                    </div>  
                </div>
                
            </div>
           
        </Container>
    )
}

export default Contact;