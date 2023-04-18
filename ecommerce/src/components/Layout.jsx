import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Divider, FlexboxGrid, Col, Panel, Row, Content ,Header, Breadcrumb} from 'rsuite';
import SideNav from './SideNav';

function Layout() {
    return (
        <Container>           
            <Container >
                <FlexboxGrid    >
                    <FlexboxGrid.Item as={Col} colspan={24} >
                        <Row className="show-grid" gutter={24} >
                            <Col className='layout' xsHidden smHidden mdHidden lg={5}>
                                <Header>
                                    <SideNav />
                                    <h5>My Acoount</h5> 
                                    <Divider /> 
                                </Header>
                            
                                <Content>Content</Content>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={19}>
                                <Outlet/>  
                            </Col>
                        </Row>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Container>
        </Container >
    );
}

export default Layout