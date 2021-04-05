import React from 'react'
import { Row, Col } from 'reactstrap' 
import Card from './common/Card'

function Benefits(){
    return(
        <div className="benefits-container">
            <Row className="benefits-heading">
                <Col xl="6" md="6" sm="12">
                    <h1 style={{fontWeight: 'bolder'}}>Benefits</h1>
                </Col>
                <Col xl='6' md="6" sm="12">
                    <h3>
                        Aliquam convallis venenatis varius. Integer pulvinar augue porta scelerisqe facilisis.
                    </h3>
                </Col>
            </Row>
            <div style={{paddingBottom: 20}}>
                <Row style={{paddingLeft: 60, paddingRight: 60}}>
                    <Col>
                        <Card 
                            title={'Actionable Insights'}
                            subtitle={"Vivamus gravida lacinia tellus, vitae ondimentum purus tristique sed."}
                        />
                    </Col>
                    <Col>
                        <Card 
                            title={'Monitoring & Alerting'}
                            subtitle={"Sed luctus suscipit tinnt. Ornare facilisis porttitor suspendisse potentias."}
                        />
                    </Col>
                    <Col>
                        <Card 
                            title={'Trading for Everyone'}
                            subtitle={"Vivamus gravida lacinia tellus, vitae ondimentum purus tristique sed."}
                        />
                    </Col>
                </Row>
                <Row style={{paddingLeft: 60, paddingRight: 60}}>
                <Col>
                        <Card 
                            title={'Peer to peer Network'}
                            subtitle={"Sed luctus suscipit tinnt. Ornare facilisis porttitor suspendisse potentias."}
                        />
                    </Col>
                    <Col>
                        <Card 
                            title={'Competitive Rates'}
                            subtitle={"Vivamus gravida lacinia tellus, vitae ondimentum purus tristique sed."}
                        />
                    </Col>
                    <Col>
                        <Card 
                            title={'Technical Support'}
                            subtitle={"Sed luctus suscipit tinnt. Ornare facilisis porttitor suspendisse potentias."}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Benefits