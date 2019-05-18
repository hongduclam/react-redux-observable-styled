import React from "react";
import styled from "styled-components";
import { Item } from "./components/Item";
import { BackDropWrapper } from "../../components/styled";
import { createStructuredSelector } from "reselect";
import BlockUi from "react-block-ui";

import { loadingSelector, errorSelector, listItemsSelector } from "../../services/item/item.selectors";
import { listItems } from "../../services/item";
import { connect } from "react-redux";

const ListItemPageWrapper = styled.div`
	background-color: #f1f1f1 !important;
	margin: 0 auto;
`;

const GridRowWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	box-sizing: border-box;
`;

export const BackDropContext = React.createContext({
	showBackDrop: false,
	handleToggleBackDrop: () => true
});

export class ListItemPage extends React.PureComponent {
  limit = 20;
	constructor(props) {
		super(props);
		this.state = {
			showBackDrop: false
		};
	}

	componentDidMount() {
		this.props.getListItems(this.limit);
	}

	handleToggleBackDrop = () => {
		this.setState(prevState => ({
			showBackDrop: !prevState.showBackDrop
		}));
	};

	render() {
		const { showBackDrop } = this.state;
		const { isFetching, listItems } = this.props;
		return (
			<BackDropContext.Provider
				value={{
					showBackDrop: showBackDrop,
					handleToggleBackDrop: this.handleToggleBackDrop
				}}
			>
				<BlockUi tag="div" blocking={isFetching}>
					<ListItemPageWrapper>
						<BackDropWrapper show={showBackDrop} />
						<GridRowWrapper>
							{listItems.map(item => (
								<Item {...item} key={`item-key-${item.id}`} />
							))}
						</GridRowWrapper>
					</ListItemPageWrapper>
				</BlockUi>
			</BackDropContext.Provider>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		getListItems: limit => {
			dispatch(listItems.start({ limit }));
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
)(ListItemPage);
