import React from 'react'
import first from '../assets/images/1.png'
import second from '../assets/images/2.jpg'
import three from '../assets/images/3.png'
import four from '../assets/images/4.png'


function OurClients(){
    return(
        <div className="ourclients-container">
            <div style={{marginTop: 30}}>
                <h1 style={{color: 'black', fontSize: 30}}>Our Clients</h1>
            </div>
            <div className="our-clients-container">
                <img src={first} className="img-fluid our-clients-img" alt="Responsive image" />
                <img src={second} className="img-fluid our-clients-img" alt="Responsive image" />
                <img src={three} className="img-fluid our-clients-img" alt="Responsive image" />
                <img src={four} className="img-fluid our-clients-img" alt="Responsive image" />
            </div>
        </div>
    )
}

export default OurClients