import { shallow } from "enzyme";
import React from "react";
import { TrendingItemPage, BackDropContext, TrendingItemPageWrapper } from "../../TrendingItemPage";

describe("<TrendingItemPage />", () => {
	global.window = {
		innerHeight: 100
	};
	global.document = {
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		documentElement: {
			scrollTop: 0,
			offsetHeight: 0
		}
	};
	let props = null;
	let componentWrapper = null;
	const getComponent = () => {
		if (!componentWrapper) {
			componentWrapper = shallow(<TrendingItemPage {...props} />);
		}

		return componentWrapper;
	};

	const getInstance = () => getComponent().instance();

	beforeEach(() => {
		props = {
			isFetching: false,
			listItems: [],
			error: null,
			getListItems: jest.fn()
		};
	});

	it("Should render correctly", () => {
		const wrapper = getComponent();
		expect(wrapper.find("BlockUi")).toHaveLength(1);
		expect(wrapper.find("TrendingItemPageWrapper")).toHaveLength(1);
		expect(wrapper.find("GridRowWrapper")).toHaveLength(1);
		expect(wrapper.find("BackDropWrapper")).toHaveLength(1);
		expect(wrapper.find("ErrorBoundary")).toHaveLength(1);
		expect(wrapper.find("Item")).toHaveLength(0);
	});

	it("Should handle componentDidMount() correctly", () => {
		const instance = getInstance();
		instance.getListItems = jest.fn();

		instance.componentDidMount();

		expect(global.document.addEventListener).toHaveBeenCalled();
		expect(instance.getListItems).toHaveBeenCalled();
	});
	it("Should handle componentWillUnmount() correctly", () => {
		const instance = getInstance();

		instance.componentWillUnmount();

		expect(global.document.removeEventListener).toHaveBeenCalled();
	});

	it("Should handle handleLoadMore() when true correctly", () => {
		const instance = getInstance();
		instance.getListItems = jest.fn();
    global.window.innerHeight =  100
    global.document.documentElement.scrollTop = 0 
    global.document.documentElement.offsetHeight = 100 

		instance.handleLoadMore();

		expect(instance.getListItems).toHaveBeenCalled();
	});

	it("Should handle handleLoadMore() when false correctly", () => {
		const instance = getInstance();
		instance.getListItems = jest.fn();
		global.window.innerHeight =  100
    global.document.documentElement.scrollTop = 0 
    global.document.documentElement.offsetHeight = 0 

		instance.handleLoadMore();
		expect(instance.getListItems).toHaveBeenCalledTimes(0);
	});

	it("Should handle getListItems() correctly", () => {
    componentWrapper = null;
		const instance = getInstance();
    instance.page = 0
		instance.getListItems();

		expect(instance.page).toBe(1);
		expect(props.getListItems).toHaveBeenCalledWith(20, 1);
	});

  it("Should handle handleToggleBackDrop() correctly", () => {
    const component = getComponent();
    const instance = component.instance();
		instance.handleToggleBackDrop();

		expect(component.state().showBackDrop).toBeTruthy();
    
	});
});
