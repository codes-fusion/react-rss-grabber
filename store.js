import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const appState = {
    title: '',
    items: []
};

const actionTypes = {
    TITLE: 'TITLE',
    LIST: 'LIST'
};

// Reducers
const reducer = (state = appState, action) => {
    switch (action.type) {
        case actionTypes.LIST:
            return Object.assign({}, state, { items: action.data });
        case actionTypes.TITLE:
            return Object.assign({}, state, { title: action.data });
        default: return state
    }
};

// Actions
export const dispatchList = (data) => dispatch => {
    return dispatch({ type: actionTypes.LIST, data: data });
};

export const dispatchTitle = (data) => dispatch => {
    return dispatch({ type: actionTypes.TITLE, data: data });
};

const mapDispatchToProps = (dispatch) => {
    return {
        showItems: bindActionCreators(dispatchList, dispatch),
        setTitle: bindActionCreators(dispatchTitle, dispatch)
    };
};

const initStore = (initialState = appState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};

// Redux
export const reduxOf = (Component) => {
    return withRedux(initStore, null, mapDispatchToProps)(Component);
};

// Connect
export const connectionOf = (Component) => {
    return connect(state => state)(Component);
};