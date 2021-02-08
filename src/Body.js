import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./Body.css";
import MapAccordion from "./MapAccordion";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Body() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="body">
      {/* Top Container */}
      <div className="main__top">
        <div className="main__top__info">
          <h3>lobby panel</h3>
          <form>
            <input type="text" placeholder="LOBBY CODE" />
          </form>
          <div class="squadmates">
            <div class="squadmate1">
              <Avatar />
              <p>Kyle</p>
            </div>
            <div class="squadmate2">
              <Avatar />
              <p>Jimmy</p>
            </div>
            <div class="squadmate3">
              <Avatar />
              <p>Joey</p>
            </div>
            <div class="squadmate4">
              <Avatar />
              <p>Kyle</p>
            </div>
            <div class="squadmate5">
              <Avatar />
              <p>Waiting for player</p>
            </div>
          </div>
        </div>

        <div className="main__top__content">
          <div className={classes.root}>
            <MapAccordion mapName="Woods" text="here are some woods quests" />
            <MapAccordion mapName="Customs" text="custies quests" />
            <MapAccordion mapName="Shoreline" text="wow shoreline sucks" />
            <MapAccordion mapName="Labs" text="pestily go labs" />
            <MapAccordion mapName="Factory" text="scav boss when" />
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="main__bottom">
        <div className="main__bottom__info">
          <h3>bottom info panel</h3>
        </div>
        <div className="main__bottom__content">
          <p>what goes here?</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
