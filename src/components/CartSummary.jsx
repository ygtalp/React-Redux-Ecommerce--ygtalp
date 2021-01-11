import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/actions/cartActions";

import {
  UncontrolledDropdown,
  DropdownToggle,
  Badge,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";

class CartSummary extends Component {
  emptyCart() {
    return (
      <NavItem style={{ color: "white", marginRight: "150px" }}>
        <NavLink style={{ color: "white" }}>
          <ShoppingCartIcon /> Sepet Boş
        </NavLink>
      </NavItem>
    );
  }
  renderCart() {
    return (
      <>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle
            nav
            caret
            style={{ color: "white", marginRight: "150px" }}
          >
            <ShoppingCartIcon /> Sepetiniz{" "}
            <Badge color="warning">{this.props.cart.length}</Badge>
          </DropdownToggle>
          <DropdownMenu right style={{ marginRight: "150px" }}>
            {this.props.cart.map((cartItem) => (
              <DropdownItem
                key={cartItem.product._id}
                style={{ cursor: "default" }}
              >
                <p>
                  {cartItem.product.title} - {cartItem.product.price} ₺
                  <Badge
                    color="danger"
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    onClick={() =>
                      this.props.actions.removeFromCart(cartItem.product)
                    }
                  >
                    Sil
                  </Badge>
                </p>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>

        {/* <ShoppingCartIcon
          className="MuiAppBar-colorPrimary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          color="secondary"
        >
          Sepet
        </ShoppingCartIcon>
        <Menu id="simple-menu" keepMounted>
          {this.props.cart.map((cartItem) => (
            <MenuItem key={cartItem.product._id}>
              {cartItem.product.title}
            </MenuItem>
          ))}
        </Menu> */}
      </>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.emptyCart()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
