import React from 'react'
import { Row, Col } from 'reactstrap'
import sideimage from '../assets/images/main-bg.png'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Cover(){
    return(
        <div className="cover-container">
            <Row> 
                <Col data-aos="fade-right" data-aos-duration="500" className="cover-title">
                    <h1 style={{textAlign:'left', fontWeight: "bolder", fontSize: 75, lineHeight: 1,marginBottom: 10}}>{'Making the future of crypto beautiful'}</h1>
                    <h3 style={{textAlign:'left', marginTop: 25}}>Integer at lorem eget diam facilisis laci ac id massa. Nulla facilisi. Duis ornare facilisis ex non porttitor.</h3>
                    <h5 style={{textAlign:'left', marginTop: 65}}>Looking for help? <span><a>Get in touch with us</a></span></h5>
                </Col>
                <Col data-aos="fade-left" data-aos-duration="500">
                    <img src={sideimage} className="img-fluid side-image" alt="Responsive image"/>
                </Col>
            </Row>
                <div style={{height: '0.5px', width:'90%', backgroundColor: 'rgb(39, 42, 46)', marginTop: 10, marginBottom: 20}}/>
            <Row className="crypto-stock" style={{justifyContent:'space-between', width:'90%', marginBottom: 30}}>
                <Col>
                    <div>
                        <h5>Avanda Index fund</h5>
                    </div>
                </Col>
                <Col className="stock-box">
                    <h5>Bitcoin</h5>
                    <h5>$64,825.17</h5>
                    <h5 style={{color: '#5EC27A'}}>+3.75%</h5>
                </Col>
                <Col className="stock-box">
                    <h5>Ethereum</h5>
                    <h5>$4,637.56</h5>
                    <h5 style={{color: '#C25E92'}}>-1.75%</h5>
                </Col>
                <Col className="stock-box">
                    <h5>Litecoin</h5>
                    <h5>$9,132.20</h5>
                    <h5 style={{color: '#5EC27A'}}>+2.37%</h5>
                </Col>
                <Col className="stock-box">
                    <h5>Ripple</h5>
                    <h5>$474.64</h5>
                    <h5 style={{color: '#C25E92'}}>-0.18%</h5>
                </Col>
            </Row>
        </div>
    )
}

export default Cover