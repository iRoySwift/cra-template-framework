import React, { createContext, useReducer, useContext } from "react";
import reducer from "../reducers";
import initState from "../states";

const AppContext = createContext({
    state: initState,
    dispatch: console.info
});

interface Props {}
const withProviders =
    (Component): React.FC<Props> =>
    props => {
        const [state, dispatch] = useReducer(reducer, initState);
        return (
            <AppContext.Provider value={{ state, dispatch }}>
                <Component {...props} />
            </AppContext.Provider>
        );
    };

const useAppState = () => useContext(AppContext).state;
const useDispatch = () => useContext(AppContext).dispatch;

export { useAppState, useDispatch };

export default withProviders;
