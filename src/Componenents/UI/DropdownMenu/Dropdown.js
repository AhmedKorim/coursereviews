import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';

class Dropdown extends React.Component {
    state={}
    render() {
        const {} = this.state;
        return (
            <div className="reviewCard">
                <div className="container">
                    <Grid container>
                        <Grid item xs={12} md></Grid>
                        <Grid item xs={12} md></Grid>
                        <Grid item xs={12} md></Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Dropdown;