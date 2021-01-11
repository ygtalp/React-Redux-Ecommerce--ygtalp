import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";

import CartSummary from "./CartSummary";
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand="md"
        style={{
          backgroundColor: "#3f51b5",
          justifyContent: "space-between",
          minWidth: "100%",
          position: "fixed",
          marginTop: "-80px",
          zIndex: "2",
        }}
      >
        <NavbarBrand style={{ color: "white", marginLeft: "70px" }}>
          LOGO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navbar className="mr-auto" navbar></Navbar>
          <NavbarText style={{ listStyleType: "none" }}>
            <CartSummary />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
