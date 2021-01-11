import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import CartSummary from "../components/CartSummary";
import { Nav } from "reactstrap";

export default function Header() {
  const displayDesktop = () => {
    return (
      <div style={{ justifyContent: "space-between" }}>
        <Toolbar
          style={{
            justifyContent: "space-between",
            marginLeft: "100px",
            marginRight: "200px",
          }}
        >
          LOGO
          <Nav className="ml-auto" navbar>
            <CartSummary />
          </Nav>
        </Toolbar>
      </div>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
