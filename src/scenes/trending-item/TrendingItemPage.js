import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Item } from "./components/Item";
import { BackDrop } from "../../components/styled";
import { createStructuredSelector } from "reselect";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

import { loadingSelector, errorSelector, listItemsSelector } from "../../services/item/item.selectors";
import { listItems } from "../../services/item";
import { connect } from "react-redux";
import ErrorBoundary from "../../components/ErrorBoundary";

export const TrendingItemPageWrapper = styled.div`
	background-color: #f1f1f1 !important;
	margin: 0 auto;
`;

TrendingItemPageWrapper.displayName = "TrendingItemPageWrapper";

export const ListItemsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	box-sizing: border-box;
`;

ListItemsWrapper.displayName = "ListItemsWrapper";

export const ThemeContext = React.createContext({
	showBackDrop: false,
	handleToggleBackDrop: React.noop
});

const buildItemInfo = (itemRawInfo = {}) => {
	return {
		itemInfo: {
			totalViews: 1000,
			totalComments: 1000,
			totalLikes: 1000,
			imgUrl: itemRawInfo.images ? itemRawInfo.images.fixed_height.url : "",
			title: itemRawInfo.title
		},
		userInfo: {
			avatarUrl: itemRawInfo.user ? itemRawInfo.user.avatar_url : "",
			name: itemRawInfo.user ? itemRawInfo.user.display_name : ""
		}
	};
};
const limit = 20;

export class TrendingItemPage extends React.PureComponent {
	page = 0;
	constructor(props) {
		super(props);
		this.state = {
			showBackDrop: false
		};
	}

	componentDidMount() {
		document.addEventListener("scroll", this.handleLoadMore, false);
		this.getListItems();
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleLoadMore, false);
	}

	handleLoadMore = () => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			this.getListItems();
		}
	};

	getListItems = () => {
		this.page = this.page + 1;
		this.props.getListItems(limit, this.page);
	};

	handleToggleBackDrop = () => {
		this.setState(prevState => ({
			showBackDrop: !prevState.showBackDrop
		}));
	};

	render() {
		const { showBackDrop } = this.state;
		const { isFetching, listItems } = this.props;
		return (
			<ThemeContext.Provider
				value={{
					showBackDrop: showBackDrop,
					handleToggleBackDrop: this.handleToggleBackDrop
				}}
			>
				<ErrorBoundary>
					<BlockUi tag="div" blocking={isFetching}>
						<TrendingItemPageWrapper>
							<BackDrop show={showBackDrop} />
							<ListItemsWrapper>
								{listItems.map((item, index) => (
									<Item {...buildItemInfo(item)} key={`item-key-${item.id}-${index}`} />
								))}
							</ListItemsWrapper>
						</TrendingItemPageWrapper>
					</BlockUi>
				</ErrorBoundary>
			</ThemeContext.Provider>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		getListItems: (limit, offset) => {
			dispatch(listItems.start({ limit, offset }));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	isFetching: loadingSelector,
	listItems: listItemsSelector,
	error: errorSelector
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrendingItemPage);

TrendingItemPage.defaultProps = {
	isFetching: false,
	listItems: [],
	error: null,
	getListItems: () => true
};

TrendingItemPage.propTypes = {
	isFetching: PropTypes.bool,
	listItems: PropTypes.array,
	error: PropTypes.string,
	getListItems: PropTypes.func
};
