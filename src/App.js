import React from "react";
import data from "./data.json";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Products from "./components/Products";
import FilterResults from "./components/FilterResults";
import FilterPrice from "./components/FilterPrice";
import FilterColor from "./components/FilterColor";
import FilterSize from "./components/FilterSize";

import Navi from "./components/Navi";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      availableSizes: "",
      sort: "",
      color: "",
      price: "",
    };
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };

  filterColors = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState((state) => ({
        color: event.target.value,
        products: data.products,
      }));
    } else {
      this.setState((state) => ({
        color: event.target.value,
        products: data.products.filter(
          (product) => product.color.indexOf(event.target.value >= 0) //undefined olarak dönmekte..........??
        ),
      }));
    }
  };

  filterSizes = (event) => {
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({
        availableSizes: event.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        availableSizes: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value !== -1) //undefined dönmekte.........??
        ),
      });
    }
  };

  filterPrice = (event) => {
    console.log(event.target.value);
  };

  render() {
    /* const handleColors = (colors, category) => {
      console.log(colors);

      const newColors = { ...colors };
      newColors[category] = colors;
      console.log(newColors);

      if (category === "price") {
      }
      this.setState({ cData: newColors });
      console.log(this.cData);
    }; */
    return (
      <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
        {/* <Header /> */}
        <Navi />
        <div style={{ marginTop: "80px" }}>
          <Grid container>
            <Grid item xs={11}>
              <Paper
                spacing={3}
                style={{
                  marginLeft: "40px",
                  position: "fixed",
                  minWidth: "95%",
                  zIndex: "1",
                  marginTop: "-25px",
                }}
              >
                <FilterResults
                  count={this.state.products.length}
                  sort={this.state.sort}
                  sortProducts={this.sortProducts}
                />
              </Paper>
            </Grid>

            <Grid
              item
              xs={3}
              spacing={3}
              style={{
                position: "fixed",
                flexWrap: "wrap!important",
                maxWidth: "100%!important",
              }}
            >
              <Paper
                style={{
                  maxWidth: "100%!important",
                  marginLeft: "40px",
                  marginTop: "120px",
                  padding: "20px",
                  flexWrap: "wrap!important",
                }}
              >
                <div>
                  <FilterColor
                    /* handleColors={(colors) =>
                      handleColors(colors, "colorsData")
                    } */
                    color={this.state.color}
                    filterColors={this.filterColors}
                  />
                  <FilterSize
                    availableSizes={this.state.availableSizes}
                    filterSizes={this.filterSizes}
                  />
                  <FilterPrice
                    price={this.state.price}
                    filterPrice={this.filterPrice}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid
              item
              xs={8}
              className="content"
              style={{
                maxWidth: "100%!important",
                marginLeft: "491px",
                marginTop: "120px",
              }}
            >
              <Paper className="main" style={{ marginBottom: "20px" }}>
                <Products products={this.state.products} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
