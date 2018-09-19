import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import RootRef from "@material-ui/core/RootRef/RootRef";
import Switch from "@material-ui/core/Switch/Switch";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Component, Fragment} from 'react';
import ReportCard from "../Componenents/Layout/ReportCard/ReportCard";
import SnackBar from "../Componenents/UI/snakebar/Snackbar";
import Spinner from "../Componenents/UI/Spinner/Spinner";
import './App.scss';
import {withTheme} from '@material-ui/core/styles';
import withDirection from "../HOC/withDirection";

const styles = theme => ({
    unaffected: {
        flip: false,
        textAlign: 'right',
        position: 'absolute',
    },
})

class App extends Component {
    state = {
        load: false,
        snackbar: false,
        arabic: true
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

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
        this.props.changeDirection();
        console.log(this.props.theme);
    };
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
                            <Typography variant="display3" component="h1"
                                        className="mainHeader">{this.props.rtl ? "تقيمات الدروس" : 'Courses Reviews'}</Typography>
                            <div className={this.props.classes.unaffected}>
                                <Switch
                                    checked={this.state.arabic}
                                    onChange={this.handleChange('arabic')}
                                    value="checkedA"
                                />
                                <Typography variant="subheading" color="inherit" component="span">{this.state.arabic ? 'العربيه' : 'english'}</Typography>
                            </div>
                        </Toolbar>
                    </AppBar>
                </RootRef>
                <main style={{height: `calc(100vh - ${this.headerHeight ? this.headerHeight : 120}px)`}}>
                    <ReportCard
                        rtl={this.props.rtl}
                        toggleSnakeBar={this.toggleSnakeBar}
                        load={this.load} ref={(com) => this.reportCard = com}/>
                </main>
                <div className="FloatActionButtonWrapper">
                    <Tooltip title={this.props.rtl ? "اضف تعليق جديد" : 'add new comment'}>
                        <Button variant="fab" color="primary" onClick={this.addMore} className="newReviewFap"><Icon>add</Icon></Button>
                    </Tooltip>
                </div>
                {this.state.load && <Spinner/>}
                <SnackBar open={this.state.snackbar}/>
            </Fragment>
        );
    }
}

export default withStyles(styles)(withDirection(App));
