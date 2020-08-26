import React from 'react';
import styled from '@emotion/styled'
import LogoImg from '../../images/logo.png'

const Header = styled.header`
    width: 100%;
    padding: 20px 0 0 20px;
`;

const LogoContainer = styled.div`
    height: 29px;
`;

const Logo = styled.img`
    max-height: 100%
`;

export default function HeaderPage(){
    return(
        <Header>
                <LogoContainer>
                    <Logo src={LogoImg}/>
                </LogoContainer>
        </Header>
    );
}