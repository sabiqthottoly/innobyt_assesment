import React from 'react'
import { Row,Col } from 'reactstrap'

function Card(props){
    return(
        <div className="card-container">
            <div style={{justifyContent:"space-between",display:'flex',marginBottom: 30}}>
                <div>
                    <h3 style={{marginRight: 40}}>{props.title}</h3>
                </div>
                <div style={{display:'flex', height: 40, width: 40, backgroundColor: 'rgba(121, 121, 121, 0.555)',borderRadius: 40, alignItems:'center',justifyContent:'center'}}>🖥️</div>
            </div>
            <Row style={{paddingLeft: 20, marginBottom: 10}}>
                <Col>
                    <p style={{color:'rgb(200, 197, 245)', fontSize: 18}}>{props.subtitle}</p>
                </Col>
            </Row>
            <Row>
                <div className="learn-more-btn">
                    {'Learn More  ->'}
                </div>
            </Row>
        </div>
    )
}

export default Card