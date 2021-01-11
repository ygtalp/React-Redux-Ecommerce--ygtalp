import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import placeholder from "../placeholder.png";
import Button from "@material-ui/core/Button";
import alertify from "alertifyjs";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/actions/cartActions";



class Products extends Component {
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.title + " sepete eklendi");
  };

  render() {
    return (
      <ul className="products">
        {this.props.products.map((product) => (
          <li
            key={product._id}
            style={{
              textDecoration: "none!important",
              listStyleType: "none",
              padding: "10px",
            }}
          >
            <div className="product">
              <img style={{ width: "300px" }} src={placeholder} alt="" />
              <div className="title" style={{ padding: "10px" }}>
                {product.title} |{" "}
                <Button
                  className="color"
                  style={{
                    backgroundColor: `${product.color}`,
                    height: "20px",
                    minWeight: "50px",
                    borderRadius: "15px",
                  }}
                ></Button>
                {" | "}
                {product.availableSizes}
              </div>
              <div className="product-price">
                <div className="price">{product.price} ₺</div>
                <Button
                  onClick={() => this.addToCart(product)}
                  className="myBtn"
                  variant="contained"
                  color="primary"
                >
                  Sepete Ekle
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Products);
