import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default class Filter extends Component {
  render() {
    return (
      <div className="filterCollapse">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={this.props.price}
              onChange={this.props.filterPrice}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="0-100 ₺"
                style={{ paddingRight: "0px" }}
              />
              <FormControlLabel
                value="100"
                control={<Radio />}
                label="100-200 ₺"
                style={{ paddingRight: "0px" }}
              />
              <FormControlLabel
                value="200"
                control={<Radio />}
                label="200-500 ₺"
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
