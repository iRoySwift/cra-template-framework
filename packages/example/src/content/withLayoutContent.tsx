import React, { createContext, useContext, useReducer } from "react";

interface Props {}

enum LayoutAction {
    ACTIVE_ITEM = "ACTIVE_ITEM",
    OPEN_DRAWER = "OPEN_DRAWER",
    CLOSE_DRAWER = "CLOSE_DRAWER"
}

const initialState = {
    openItem: ["dashboard"],
    drawer: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case LayoutAction.ACTIVE_ITEM:
            return Object.assign({}, state, {
                openItem: [action.openItem]
            });
        case LayoutAction.OPEN_DRAWER:
            return Object.assign({}, state, {
                drawer: true
            });
        case LayoutAction.CLOSE_DRAWER:
            return Object.assign({}, state, {
                drawer: false
            });
        default:
            return state;
    }
};

const activeItem = openItem => ({
    type: LayoutAction.ACTIVE_ITEM,
    openItem
});
const openDrawer = () => ({
    type: LayoutAction.OPEN_DRAWER
});
const closeDrawer = () => ({
    type: LayoutAction.CLOSE_DRAWER
});

const LayoutContent = createContext({
    state: initialState,
    dispatch: console.info
});
const withLayoutContent =
    (Component): React.FC<Props> =>
    props => {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <LayoutContent.Provider value={{ state, dispatch }}>
                <Component {...props} />
            </LayoutContent.Provider>
        );
    };

const useLayoutState = () => useContext(LayoutContent).state;
const useLayoutDispatch = () => useContext(LayoutContent).dispatch;

export { useLayoutState, useLayoutDispatch, activeItem, openDrawer, closeDrawer };
export default withLayoutContent;
