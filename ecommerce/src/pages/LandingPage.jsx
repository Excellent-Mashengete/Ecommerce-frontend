import React from 'react'
import { Carousel , Row , Col , Panel} from 'rsuite';
import Card from '../components/Card';
import { sliderItems } from '../data';


function landingPage() {

console.log(sliderItems);
  return (

    <>
    <Carousel autoplay className="custom-slider" style={{ height: '50vh', marginTop: '10vh', marginRight: '2.5vw',  marginLeft: '2.5vw'}}>
      {sliderItems.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.pic} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </div>
        )}
      )}
    </Carousel>
  
  <a href="/category" style={{textDecoration: 'none'}}>
      <div style={{textAlign: 'center', marginTop: '20px'}}>
          <h2 style={{color: '#5C5C5C'}}>Shop By Category</h2>
      </div>
  </a>

  <Row style={{ marginTop: '5vh', marginRight: '2.5vw', marginLeft: '2.5vw', flexWrap: 'wrap'}}>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden', height:'100%' }} bordered header="Women's dresses">
            <Card />
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Tops">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Women's shoes">
            <Card/> 
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Women's watches">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Women's bags">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden', height:'100%'}} bordered header="Women's jewellery">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Women's bags">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Men's shoes">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Men's watches">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Men's shirts">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Fragrances">
            <Card/>
        </Panel>
    </Col>
    <Col md={6} sm={12} style={{ marginBottom: '1.5vh' }}>
        <Panel className='colCircle' style={{wordWrap: 'break-word', overflow: 'hidden',height:'100%'}} bordered header="Skincare">
            <Card/>
        </Panel>
    </Col>
                      
</Row>

  </>
  )
}

export default landingPage

