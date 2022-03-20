import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d2731;
  width: 100%;
  height: 15vh;
  border-radius: 5px;
`;

export const HeaderText = styled.h3`
  color: white;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -24px;
  
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
 /*  @media screen and (max-width: 768px) {
    display: none;
  } */
`;
export const NavLink = styled(Link)`
  padding: 10px 22px;
  font-weight:600 ;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:active{
    color: #8ad55d;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
    color: #8ad55d;

  }
`;
