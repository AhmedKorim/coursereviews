import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button/Button";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import React, {Component, Fragment} from 'react';
import './App.scss';
import ReportCard from "../Componenents/Layout/ReportCard/ReportCard";

class App extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <h1 className="mainHeader">course reviews</h1>
                    </Toolbar>
                </AppBar>
                <main>
                    <ReportCard/>
                </main>
            </Fragment>
        );
    }
}

export default App;
