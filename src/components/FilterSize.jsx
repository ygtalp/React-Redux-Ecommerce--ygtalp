import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import { sizesData } from "../sizesData";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Filter extends Component {
  render() {
    return (
      <div className="filterCollapse">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Beden</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: "block" }}>
            <RadioGroup
              style={{ display: "block" }}
              aria-label="gender"
              name="gender1"
              value={this.props.availableSizes}
              onChange={this.props.filterSizes}
            >
              <FormControlLabel value="S" control={<Radio />} label="S" style={{ paddingRight: "13px" }}/>
              <FormControlLabel value="M" control={<Radio />} label="M" style={{ paddingRight: "13px" }}/>
              <FormControlLabel value="X" control={<Radio />} label="X" style={{ paddingRight: "13px" }}/>
              <FormControlLabel value="XL" control={<Radio />} label="XL" />
            </RadioGroup>

            {/* {sizesData.map((value, index) => (
            <React.Fragment key={index}>
              <div className="asd">
                <Checkbox onChange type="checkbox" checked />
                <span>{value.name}</span>
              </div>
            </React.Fragment>
          ))} */}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
