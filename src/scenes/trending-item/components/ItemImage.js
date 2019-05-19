import React from "react";
import styled from "styled-components";

const getImgStyle = isFullscreen => {
  if (isFullscreen) {
    return `cursor: zoom-out;
    margin: auto;
    z-index: 101;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto; height: 100%; transition: all .25s ease-out; max-width: 90%`;
  }
  return `cursor: zoom-in; z-index: 10;`;
};

const ItemImageWrapper = styled.div`
  > img {
    width: 100%;
    align-items: ${props => props.alignItems};
    ${props => getImgStyle(props.isFullscreen)};
  }
`;

export const ItemImage = ({ url, alt, handleClick, isFullscreen }) => {
  return (
    <ItemImageWrapper isFullscreen={isFullscreen}>
      <img src={url} alt={`${alt}`} onClick={handleClick} />
    </ItemImageWrapper>
  );
};
