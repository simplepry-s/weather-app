import React from "react";
import PropsTypes from "prop-types";
import { getAQIMessage } from "../config";
 
const Air = props => {
  const { air } = props;
  return (
    <div className="air-containner">
      <div className="air-inner">
        <div className="air-aqi">
          <span>{air}</span> <span>US AQI</span>
        </div>
        <div className="air-condition">
          <span>{getAQIMessage(air)}</span>
        </div>
      </div>
    </div>
  );
};

Air.propsTypes = {
  air: PropsTypes.string.isRequired
};
export default Air;
