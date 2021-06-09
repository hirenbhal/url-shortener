import React, { useState } from "react";

import {Nav,Logo,Hamburger,Menu,Link,Link2} from './NavStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav isOpen = {isOpen}>
      <Logo isOpen={isOpen}>
        Shortly
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen) } isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <Link isOpen={isOpen}>Features</Link>
        <Link isOpen={isOpen}>Pricing</Link>
        <Link isOpen={isOpen}>Resources</Link>
        <Link isOpen={isOpen}>Login</Link>
        <Link2>Sign up</Link2>
      </Menu>
    </Nav>
  );
};

export default Navbar;
