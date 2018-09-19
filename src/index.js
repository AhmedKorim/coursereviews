import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import rtl from 'jss-rtl';
import {create} from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const generateClassName = createGenerateClassName();
/*const store = createStore(
    combineReducers({}),
    composeEnhancers(applyMiddleware(thunk))
);*/
const theme = createMuiTheme({
    direction: 'rtl'
});

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <App/>
    </JssProvider>
    , document.getElementById('root'));
registerServiceWorker();
