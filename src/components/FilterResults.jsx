import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';

export default class FilterResults extends Component {
  render() {
    return (
      <div className="filter">
        <TextField
          disabled
          id="standard-disabled"
          label="Ürün Adedi"
          variant="outlined"
          color="primary"
          inputProps={{ style: { textAlign: 'center',color:"#000" }}}
          value={this.props.count}
          style={{maxWidth:"90px",color:"#000"}}
        />
        <div className="filter-sort">
          <FormControl>
            <InputLabel id="label">Sırala</InputLabel>
            <Select
              value={this.props.sort}
              onChange={this.props.sortProducts}
              style={{ minWidth: "200px" }}
            >
              <MenuItem value="latest">Yeniler</MenuItem>
              <MenuItem value="lowest">Önce En Düşük Fiyat</MenuItem>
              <MenuItem value="highest">Önce En Yüksek Fiyat</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}
