import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Sidebar, Header, Content } from 'rsuite';

function Layout() {
    return (
        <Container>
            <Sidebar>

            </Sidebar>

            <Container>
                <Header>
                    <h2>Page Title</h2>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Container>
        </Container>
    );
}

export default Layout