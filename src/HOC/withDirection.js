import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React, {Fragment} from "react";


const themeRtl = createMuiTheme({
    direction: 'rtl'
});
const themeLtr = createMuiTheme({
    direction: 'ltr'
});

const withDirection = (WrappedComponent) => {
    return class extends React.Component {
        state = {rtl: true}
        changeDirection = () => {
            this.setState(prevState => ({rtl: !prevState.rtl}))
        }

        render() {
            return (
                <Fragment>
                    <MuiThemeProvider theme={this.state.rtl ? themeRtl : themeLtr}>
                        <div dir={this.state.rtl ? "rtl" : "ltr"}>
                            <WrappedComponent {...this.props} changeDirection={this.changeDirection} rtl={this.state.rtl}/>
                        </div>
                    </MuiThemeProvider>
                </Fragment>
            )
        }
    }
}
export default withDirection;