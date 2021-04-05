import React from 'react'
import { Row, Col } from 'reactstrap'
import Card from './common/Card'
import CustomButton from './common/CustomButton'

function AboutIntro(){
    return(
        <div className="about-intro-container">
            <h1 style={{color:'white',textAlign:'center', fontSize: 55,fontWeight:'bolder'}}>A smart and secure way to invest in crypto</h1>
            <h3 style={{color:'white',textAlign:'center', fontSize: 18}}>Integer pulvinar augue porta scelerisqe facilisis. Nunc ultrices nibh ut velit convallis maximus vestibulum preim.</h3>
            <div style={{marginTop: 20}}>
                 <div className="learn-more-btn">
                    {'@ How it works'}
                </div>
            </div>
            <div className="white-card-left">
                <h1 style={{color: 'black', fontWeight:'bolder', fontSize: 85}}>64M</h1>
                <h3 style={{color:'black', fontSize: 20,textAlign:'center',fontWeight:'bold'}}>Countries Supported</h3>
                <h3 style={{color:'black', fontSize: 19,textAlign:'center'}}>Maecenas hendrerit, eros sed titor sagittis, ipsum elit molestie.</h3>
            </div>
            <div className="white-card-right">
                <h1 style={{color: 'black', fontWeight:'bolder', fontSize: 85}}>173</h1>
                <h3 style={{color:'black', fontSize: 20,textAlign:'center',fontWeight:'bold'}}>Countries Supported</h3>
                <h3 style={{color:'black', fontSize: 19,textAlign:'center'}}>Maecenas hendrerit, eros sed titor sagittis, ipsum elit molestie.</h3>
            </div>
        </div>
    )
}

export default AboutIntro