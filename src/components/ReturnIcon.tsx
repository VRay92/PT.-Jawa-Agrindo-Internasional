import * as React from "react";

interface IReturnIconProps {}

const ReturnIcon: React.FunctionComponent<IReturnIconProps> = (props) => {
  return (
    <a id="return-icon" href="#navbar">
      <img id="arrow" src="./assets/thin-chevron-arrow-top-icon.png" />
    </a>
  );
};

export default ReturnIcon;
