import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "./../TrendingItemPage";

const getImgStyle = isFullscreen => {
	if (isFullscreen) {
		return `cursor: zoom-out;
    margin: auto;
    z-index: 101;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto; height: 100%; transition: all .1s ease-out; max-width: 90%`;
	}
	return `cursor: zoom-in; z-index: 10;`;
};
const S = {
	ItemImage: styled.div`
		> img {
      object-fit: contain;
      width: 100%;
      height: 200px;
			align-items: ${props => props.alignItems};
			${props => getImgStyle(props.isFullscreen)};
		}
	`
};

export const ItemImage = ({ url, alt }) => {
  // TODO: we can use useReducer instead by useState if it is complex state
	const [isFullscreen, setIsFullscreen] = useState(false);
  const { handleToggleBackDrop } = useContext(ThemeContext);
  
  /** TODO: Use this code when you want to show backdrop after Image rendered */
	// useEffect(() => {
	// 	handleToggleBackDrop();
  // });
  const handleImgClick = () => {
    handleToggleBackDrop()
    setIsFullscreen(!isFullscreen)
  }
	return (
		<S.ItemImage isFullscreen={isFullscreen}>
			<img src={url} alt={`${alt}`} onClick={handleImgClick} />
		</S.ItemImage>
	);
};
