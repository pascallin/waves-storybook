import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CoverBox = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const Cover = styled.img`
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const CoverImage = (props) => {
  return (
    <CoverBox style={{ width: props.width }}>
      <Cover src={props.imageURL} />
    </CoverBox>
  );
};

CoverImage.propTypes = {
  imageURL: PropTypes.string,
  width: PropTypes.number,
};

export default CoverImage;
