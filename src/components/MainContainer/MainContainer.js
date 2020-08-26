import React from 'react';

import { 
    Container,
    LinksContainer,
    LinkNav,
    LinkProfile,
    Header
 } from "./MainContainerStyles";

export default function MainContainer({children}){
    return(
        <Container>
                <Header>
                    <nav>
                        <LinksContainer>
                            <LinkNav to="/transactions"><i className="fas fa-coins"></i> Transactions</LinkNav>
                            <LinkNav to="/reports"><i className="far fa-clipboard"></i> Reports</LinkNav>
                        </LinksContainer>
                    </nav>
                    <nav>
                        <LinksContainer>
                            <LinkProfile to="/profile">Profile</LinkProfile>
                            <LinkProfile className="logout" to="/logout">Logout</LinkProfile>
                        </LinksContainer>
                    </nav>
                </Header>
                {children}
        </Container>
    );
}

