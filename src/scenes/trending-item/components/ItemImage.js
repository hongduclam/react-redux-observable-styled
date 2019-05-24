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

S.ItemImageLoader = styled.div`
	display: inline-block;
	width: 64px;
	height: 64px;
	z-index: 99999;
	position: absolute;
	top: 30%;
	left: 40%;

	&:after {
		content: " ";
		display: block;
		width: 46px;
		height: 46px;
		margin: 1px;
		border-radius: 50%;
		border: 5px solid black;
		border-color: black transparent black transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const ItemImage = ({ url, alt }) => {
	// TODO: we can use useReducer instead by useState if it is complex state
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isLoaded, setIsLoaded] = useState(true);
	const { handleToggleBackDrop } = useContext(ThemeContext);

	/** TODO: Use this code when you want to show backdrop after Image rendered */
	// useEffect(() => {
	// 	handleToggleBackDrop();
	// });
	const handleImgClick = () => {
		handleToggleBackDrop();
		setIsFullscreen(!isFullscreen);
  };
  // TODO: handle lazy load image
	const handleLoading = () => {
		setIsLoaded(true);
	};

	return (
		<div style={{ height: 200 }}>
			{isLoaded ? (
				<S.ItemImage isFullscreen={isFullscreen}>
					<img src={url} alt={`${alt}`} onClick={handleImgClick} />
				</S.ItemImage>
			) : (
				<S.ItemImageLoader />
			)}
		</div>
	);
};
