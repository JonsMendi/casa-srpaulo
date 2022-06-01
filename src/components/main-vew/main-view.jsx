import React from "react";
import NavbarView from "../navbar-view/navbar-view";
import AboutView from "../about-view/about-view";
import HistoryView from "../history-view/history-view";
import ContactView from "../contact-view/contact-view";
import { Container } from "react-bootstrap";

class MainView extends React.Component {

    render() {
        return (
            <Container>
                <NavbarView />
                <AboutView />
                <HistoryView /> 
                <ContactView />
            </Container>
            
        )
    }
}

export default (MainView);