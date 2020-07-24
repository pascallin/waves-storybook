import React from "react";
import { Button, DatePicker, version } from "antd";

export default {
  title: "Antd-Test",
  component: Button,
};
export function AntdTest(props) {
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
