import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import RootRef from "@material-ui/core/RootRef/RootRef";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import React, {Component, Fragment} from 'react';
import ReportCard from "../Componenents/Layout/ReportCard/ReportCard";
import SnackBar from "../Componenents/UI/snakebar/Snackbar";
import Spinner from "../Componenents/UI/Spinner/Spinner";
import './App.scss';

class App extends Component {
    state = {
        load: false,
        snackbar: false
    }

    componentDidMount() {
        if (!this.header) return;
        this.headerHeight = window.getComputedStyle(this.header).height;
    }

    addMore = () => {
        if (!this.reportCard) return;
        this.reportCard.addMoveReviews();
    }
    load = () => {
        this.setState(prevState => ({load: !prevState.load}))
    }

    toggleSnakeBar = () => {
        clearTimeout(this.timeout);
        this.setState(prevState => ({snackbar: !prevState.snackbar}));
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
                    <ReportCard
                        toggleSnakeBar={this.toggleSnakeBar}
                        load={this.load} ref={(com) => this.reportCard = com}/>
                </main>
                <div className="FloatActionButtonWrapper">
                    <Tooltip title="add new course review">
                        <Button variant="fab" color="primary" onClick={this.addMore} className="newReviewFap"><Icon>add</Icon></Button>
                    </Tooltip>
                </div>
                {this.state.load && <Spinner/>}
                <SnackBar open={this.state.snackbar}/>
            </Fragment>
        );
    }
}

export default App;
