import React from "react";
import PropTypes from "prop-types";
import { Button, DatePicker, version } from "antd";

AntdTest.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function AntdTest(props) {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.onClick}>
        Primary Button
      </Button>
    </div>
  );
}
