import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WrapCorner = styled.div`
  width: 10px;
  height: 10px;
  z-index: 1;
  position: absolute;
  background-color: ${(props) => props.bgColor};
`;

const WrapRightTop = styled(WrapCorner)`
  top: -1px;
  right: -1px;
  border-radius: 0 0 0 30px;
`;

const WrapRightBottom = styled(WrapCorner)`
  bottom: -1px;
  right: -1px;
  border-radius: 30px 0 0 0;
`;

const WrapLeftTop = styled(WrapCorner)`
  top: -1px;
  left: -1px;
  border-radius: 0 0 30px 0;
`;

const WrapLeftBottom = styled(WrapCorner)`
  bottom: -1px;
  left: -1px;
  border-radius: 0 30px 0 0;
`;

const ConcaveRound = (props) => {
  const { leftTop, leftBottom, rightTop, rightBottom } = props;
  return (
    <div style={Object.assign({ position: "relative" }, props.style)}>
      {leftTop && <WrapLeftTop bgColor={props.bgColor} />}
      {leftBottom && <WrapLeftBottom bgColor={props.bgColor} />}
      {rightTop && <WrapRightTop bgColor={props.bgColor} />}
      {rightBottom && <WrapRightBottom bgColor={props.bgColor} />}
      {props.children}
    </div>
  );
};

ConcaveRound.propTypes = {
  leftTop: PropTypes.bool.optional,
  rightTop: PropTypes.bool.optional,
  leftBottom: PropTypes.bool.optional,
  rightBottom: PropTypes.bool.optional,
  bgColor: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ConcaveRound;
