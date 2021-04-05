import React from 'react'
import { Row, Col } from 'reactstrap'
import Card from './common/Card'

function Footer(){
    return(
        <Row className="footer-container">
            <Col xl="3" md="3" sm="12">
                <Row>
                   <div style={{display:'flex',flexDirection:'column'}}>
                        <h5 style={{fontWeight:'bold'}}>ARCHIVES</h5>
                        <h5>{"> April 2020"}</h5>
                        <div style={{height:0.5,}}/>
                        <h5>{"> January 2019"}</h5>
                    </div>
                </Row>
                <Row>
                   <div style={{display:'flex',flexDirection:'column', marginTop: 20}}>
                        <h5 style={{fontWeight:'bold'}}>CATEGORIES</h5>
                        <h5>{"> Bitcoin"}</h5>
                        <h5>{"> Investment"}</h5>
                        <h5>{"> Uncategorized"}</h5>
                    </div>
                </Row>
                <Row>
                   <div style={{display:'flex',flexDirection:'column', marginTop: 20}}>
                      <h5 style={{fontWeight:'bold'}}>META</h5>
                      <h5>{"> Log in"}</h5>
                      <h5>{"> Entries feed"}</h5>
                      <h5>{"> Comments feed"}</h5>
                      <h5>{"> WordPress.org"}</h5>
                    </div>
                </Row>
            </Col>
            
            <Col xl="3" md="3" sm="12">
                <h5 style={{fontWeight:'bold'}}>WHITE PAPER</h5>
                <p style={{color:"white"}}>Aliquam convallis venenatis varius. Integer pulvinar</p>
                <div>
                    <h5>⬇️ Download</h5>
                </div>
            </Col>
            
            <Col xl="3" md="3" sm="12">
                <h5 style={{fontWeight:'bold'}}>GET SUPPORT</h5>
                <h5>info@your-domain.com</h5>
                <h5>Mon-Fri: 9:00 AM – 6:00 PM</h5>
                <div>
                    <h5>📞 800-601-0230</h5>
                </div>
            </Col>
            <Col xl="3" md="3" sm="12">
                <h5 style={{fontWeight:'bold'}}>FIND US</h5>
                <h5>Residential Location </h5>
                <h5>9521 Broadsberry Avenue</h5>
                <div>
                    <h5>📍 Check maps</h5>
                </div>
            </Col>
        </Row>
    )
}

export default Footer