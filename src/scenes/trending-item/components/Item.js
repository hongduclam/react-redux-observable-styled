import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ItemImage } from "./ItemImage";
import { ItemTotalInfo } from "./ItemInfo";
import { FlexDiv, Saperator } from "../../../components/styled";
import { UserInfo } from "./UserInfo";
import { IconView, IconComment, IconLike, IconAttach } from "../../../components/icons";

const S = {};
S.Item = styled.div`
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

S.ItemInfo = styled.div`
	background-color: white;
	padding: 0.5em;
`;

const ItemInfo = ({ imgUrl, title, totalViews, totalComments, totalLikes }) => {
	return (
		<S.ItemInfo>
			<ItemImage url={imgUrl} alt={title} />
			<FlexDiv alignItems="center">
				<FlexDiv justifyContent="flex-start" flex={`1`}>
					<IconAttach />
				</FlexDiv>
				<FlexDiv justifyContent="flex-end" flex={`2`}>
					<ItemTotalInfo icon={<IconView />} value={totalViews} />
					<Saperator />
					<ItemTotalInfo icon={<IconComment />} value={totalComments} />
					<Saperator />
					<ItemTotalInfo icon={<IconLike />} value={totalLikes} />
				</FlexDiv>
			</FlexDiv>
		</S.ItemInfo>
	);
};

export const Item = ({ itemInfo, userInfo }) => {
	return (
		<S.Item>
			<ItemInfo {...itemInfo} />
			<UserInfo {...userInfo} />
		</S.Item>
	);
};

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
