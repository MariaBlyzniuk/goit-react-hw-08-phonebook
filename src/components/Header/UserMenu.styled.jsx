import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
    text-decoration: none;
    align-items: center;
    background-image: linear-gradient(144deg, #40f9ff, #3ac2da 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(117, 189, 236, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 16px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 10px;
    padding: 10px 20px;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 200ms linear;
    :hover {
        transform: scale(1.1);
    }
`;

export const UserName = styled.p`
    margin-right: 20px;
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    align-items: center;
    background-image: linear-gradient(144deg, #40f9ff, #3ac2da 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(8, 99, 105, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 16px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 10px;
    padding: 10px 20px;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 200ms linear;
    &.active {
        outline: 0;
        background-image: linear-gradient(144deg,  #40f9ff, #3ac2da 50%, #00ddeb);
    }
    :hover {
        transform: scale(1.1);
    }
`;