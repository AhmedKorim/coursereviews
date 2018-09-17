import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import RootRef from "@material-ui/core/RootRef/RootRef";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import React, {Component, Fragment} from 'react';
import './App.scss';
import ReportCard from "../Componenents/Layout/ReportCard/ReportCard";

class App extends Component {
    componentDidMount() {
        if (!this.header) return;
        this.headerHeight = window.getComputedStyle(this.header).height;
    }

    addMore = () => {
        if (!this.reportCard) return;
        this.reportCard.addMoveReviews();
    }


    render() {
        return (
            <Fragment>
                <RootRef rootRef={(node) => this.header = node}>
                    <AppBar position="static">
                        <Toolbar>
                            <h1 className="mainHeader">course reviews</h1>
                        </Toolbar>
                    </AppBar>
                </RootRef>
                <main style={{height: `calc(100vh - ${this.headerHeight ? this.headerHeight : 120}px)`}}>
                    <ReportCard ref={(com) => this.reportCard = com}/>
                </main>
                <div className="FloatActionButtonWrapper">
                    <Tooltip title="add new course review">
                        <Button variant="fab" color="primary" onClick={this.addMore} className="newReviewFap"><Icon>add</Icon></Button>
                    </Tooltip>
                </div>
            </Fragment>
        );
    }
}

export default App;
