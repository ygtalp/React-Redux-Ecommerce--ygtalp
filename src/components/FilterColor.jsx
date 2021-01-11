import React, { useState, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import { colorsData } from "../colorsData";
import { sizesData } from "../sizesData";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/* const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
})); */

export default class Filter extends Component {
  /* const [value, setValue] = React.useState();
  const classes = useStyles();
  const [Checked, setChecked] = useState([]);

  const handleColorChange = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleColors(newChecked);
  }; */
  render() {
    return (
      <div className="filterCollapse">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Renk</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: "block" }}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={this.props.color}
              onChange={this.props.filterColors}
            >
              <FormControlLabel
                value="Red"
                control={<Radio />}
                label="Kırmızı"
              />
              <FormControlLabel value="Blue" control={<Radio />} label="Mavi" />
              <FormControlLabel
                value="Green"
                control={<Radio />}
                label="Yeşil"
              />
              <p>Seçilen değer: {this.props.color}</p>
            </RadioGroup>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Color</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block" }}>
          {colorsData.map((value, index) => (
            <React.Fragment key={index}>
              <div>
                <Checkbox
                  value={props.color}
                  onChange={props.filterColors}
                  type="checkbox"
                  checked={Checked.indexOf(value.value) === -1 ? false : true}
                />
                <span>{value.name}</span>
              </div>
            </React.Fragment>
          ))}
        </AccordionDetails>
      </Accordion> */}
      </div>
    );
  }
}
