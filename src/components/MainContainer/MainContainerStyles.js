import styled from "@emotion/styled";
import { NavLink, Link } from 'react-router-dom'



export const Container = styled.main`
    width: 928px;
    background-color: white;
    margin: 0 auto 20px auto;
    border-radius: 8px;
    padding: 10px 0;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #718096;
    height: 38px;
    margin: 0 14px;
`;
export const LinksContainer = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    align-items: flex-end;
    .active {
        color: #4C51BF;
        border-bottom: 2px solid #5A67D8;
    }
`;

export const LinkNav = styled(NavLink)`
    text-decoration: none;
    color: #A0AEC0;
    font-weight: 600;
    font-size: 16px;
    padding: 0 6px 6px 6px;
    margin-right: 12px;
    &:last-of-type {
        margin-right: none;
    }
    &:hover {
        color: #4C51BF;
        border-bottom: 2px solid #5A67D8;
    }
`;

export const LinkProfile = styled(Link)`
    color: #434190;
    font-size: 16px;
    padding: 0 6px 6px 6px;
    &.logout {
        color: #5A67D8;
        font-weight: 500;
    }
`;