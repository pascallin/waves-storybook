import React from "react";
import { Button, DatePicker, version } from "antd";

AntdTest.propTypes = {
  onClick: PropTypes.function.isRequired,
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
