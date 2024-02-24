import React from "react";
import "./HomeButton.css";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-awesome-button/dist/themes/theme-blue.css";

const HomeButton = props => {
  const { title, position, color } = props;
  const conditionalStyle =
    position == "middle" ? "middle-button" : "side-button";
  return (
    <div className={conditionalStyle}>
      <Button color={color} size="lg" block>
        <span>{title.toUpperCase()}</span>
      </Button>
    </div>
  );
};
export default HomeButton;
