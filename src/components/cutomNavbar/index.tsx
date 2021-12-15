import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn
} from './NavBarElements';

import SVG from 'react-inlinesvg';

import Logo from '../../assets/images/snubes-logo.svg'

const CustomNavbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          <SVG src={Logo} width={162} height={32} title="Logo" />
        </NavBtn>
        <NavMenu>
          <NavLink to='/#' activeStyle>
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            How it works
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            Become a Partner
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            EUR <div style={{ alignSelf: 'center' }}>
              <p style={{ marginBottom: 35, fontSize: 25 }}>&#x2304;</p>
            </div>
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            EN <div style={{ alignSelf: 'center' }}>
              <p style={{ marginBottom: 35, fontSize: 25 }}>&#x2304;</p>
            </div>
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            Sign In
          </NavLink>
          <NavLink to='/dummy' activeStyle>
            Get Access
          </NavLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default CustomNavbar;