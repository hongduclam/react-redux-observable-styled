import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ItemImage } from "./ItemImage";
import { ItemInfo } from "./ItemInfo";
import { FlexDiv, Saperator } from "../../../components/styled";
import { UserInfo } from "./UserInfo";
import { IconView, IconComment, IconLike, IconAttach } from "../../../components/icons";
import { BackDropContext } from "../TrendingItemPage";

const ItemWrapper = styled.div`
	flex-basis: calc(25% - 1em);
	position: relative;
	box-sizing: border-box;
	margin: 0.5em;

	@media (max-width: 62em) {
		flex-basis: calc(33.33% - 1em);
		p {
			font-size: 0.5em;
		}
	}

	@media (max-width: 30em) {
		flex-basis: calc(50% - 1em);
		p {
			font-size: 0.5em;
		}
	}

	/* Iphone 5 */
	@media (max-width: 320px) {
		flex-basis: calc(50% - 0.7em);
		p {
			font-size: 0.5em;
		}
		margin: 0.2em;
	}
`;

const ItemInfoWrapper = styled.div`
	background-color: white;
	padding: 0.5em;
`;

export class Item extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
	}

	handleImgClick = handleToggleBackDrop => {
		this.setState(
			prevState => ({
				isFullscreen: !prevState.isFullscreen
			}),
			handleToggleBackDrop
		);
	};

	render() {
		const {
			itemInfo: { totalViews, totalComments, totalLikes, imgUrl, title },
			userInfo: { avatarUrl, name }
		} = this.props;
		const { isFullscreen } = this.state;
		return (
			<BackDropContext.Consumer>
				{({ handleToggleBackDrop }) => (
					<ItemWrapper>
						<ItemInfoWrapper>
							<ItemImage
								url={imgUrl}
								alt={title}
								handleClick={() => this.handleImgClick(handleToggleBackDrop)}
								isFullscreen={isFullscreen}
							/>
							<FlexDiv alignItems="center">
								<FlexDiv justifyContent="flex-start" flex={`1`}>
									<IconAttach />
								</FlexDiv>
								<FlexDiv justifyContent="flex-end" flex={`2`}>
									<ItemInfo icon={<IconView />} value={totalViews} />
									<Saperator />
									<ItemInfo icon={<IconComment />} value={totalComments} />
									<Saperator />
									<ItemInfo icon={<IconLike />} value={totalLikes} />
								</FlexDiv>
							</FlexDiv>
						</ItemInfoWrapper>
						<UserInfo avatarUrl={avatarUrl} name={name} />
					</ItemWrapper>
				)}
			</BackDropContext.Consumer>
		);
	}
}

Item.defaultProps = {
	itemInfo: {},
	userInfo: {}
};

Item.propTypes = {
	itemInfo: PropTypes.shape({
		totalViews: PropTypes.number,
		totalComments: PropTypes.number,
		totalLikes: PropTypes.number,
		imgUrl: PropTypes.string,
		title: PropTypes.string
	}),
	userInfo: PropTypes.shape({
		avatarUrl: PropTypes.string,
		name: PropTypes.string
	})
};
