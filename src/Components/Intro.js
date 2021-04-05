import React from 'react'
import { Row, Col } from 'reactstrap'
import introImg from '../assets/images/intro.png'
import CustomButton from './common/CustomButton'

function Intro() {
    return(
        <Row data-aos="fade-right"  data-aos-easing="ease-in-sine"  className='intro-container'>
            <Col xl='6'>
                <img src={introImg} class="img-fluid" alt="Responsive" />
            </Col>
            <Col data-aos="fade-right" xl='6' style={{alignItems:'center'}}>
                <h1 style={{color:'black', textAlign: 'left', fontSize: 45, fontWeight: 'bolder', margin: 20}}>What is Crypto?</h1>
                <h3 style={{color:'black', textAlign: 'left', margin: 20}}>Aliquam convallis venenatis varius. Integer pulvinar augue porta scerisqe facilisis. Nunc ultrices nibh ut velit convallis maximus vestibulum.</h3>
                <Row style={{padding: 20, marginBottom: 30}}>
                    <Col>
                        <CustomButton>
                            Get started
                        </CustomButton>
                    </Col>
                    <Col>
                        <CustomButton
                            outline={true}
                        >
                            White Paper
                        </CustomButton>
                    </Col>
                </Row>
                <div style={{height: '0.5px', width:'100%', backgroundColor: 'rgb(222, 222, 223)', marginTop: 30, marginBottom: 30}}/>
                <div style={{padding: 15, marginTop: 30}}>
                    <h3 style={{color:'black', textAlign: 'left', fontWeight:'bold'}}>Get the data you need</h3>
                    <li style={{fontSize: 20, marginBottom: 10, textAlign: 'left',fontWeight:'normal'}}>Maecenas hendrerit, eros sed porttitor sagittis, ipsum elit molestie.</li>
                    <li style={{fontSize: 20, marginBottom: 10, textAlign: 'left',fontWeight:'normal'}}>Maecenas hendrerit, eros sed porttitor sagittis, ipsum elit molestie.</li>
                </div>

            </Col>
        </Row>
    )
}

export default Intro