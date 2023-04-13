import React from 'react'
import { Carousel , Row , Col , Panel} from 'rsuite';
import Cards from '../components/Card'

function landingPage() {
   
    const Card = props => (
        <Panel {...props} bordered header="Card t">
            <Cards   category="Banana"/>
        </Panel>
      ); 

  return (

    <>
    <Carousel autoplay className="custom-slider" style={{ height: '50vh', marginTop: '10vh', marginRight: '2.5vw',  marginLeft: '2.5vw'}}>
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"  />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"  />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"  />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"  />
  </Carousel>
  
    <div style={{textAlign: 'center', marginTop: '20px'}}>
        <h2>Shop By Category</h2>
    </div>

  <Row style={{ marginTop: '5vh', marginRight: '2.5vw',  marginLeft: '2.5vw'}}>

    <Col md={6} sm={12}>
        <Card/>
    </Col>
    <Col md={6} sm={12}>
        <Cards category="Apple"/>
    </Col>
    <Col md={6} sm={12}>
        <Cards  category="Apple"/>
    </Col>
    <Col md={6} sm={12}>
        <Cards  category="Apple"/>
    </Col>
  </Row>

  </>
  )
}

export default landingPage

