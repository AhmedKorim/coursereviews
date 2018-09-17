import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const store = createStore(
    combineReducers({}),
    composeEnhancers(applyMiddleware(thunk))
);*/
const theme = createMuiTheme({});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
