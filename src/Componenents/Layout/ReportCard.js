import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import FormInput from "../UI/FormInput/FormInpu";

class ReportCard extends React.Component {
    state = {
        reportMeta: [
            {value: '', label: 'E-mail', id: 'email', type: 'date'},
            {value: '', label: 'name', id: 'studentName', type: 'text'},
            {value: '', label: 'teacher', id: 'teacherName', type: 'text'},
        ],

    }

    render() {
        const {reportMeta} = this.state;
        return (
            <div className="reviewCard">
                <div className="container">
                    <form>
                        <div className="reportMetaData">
                            <Grid container>
                                <Grid item container>
                                    {reportMeta.map(metaItem => <Grid item xs={12} md>
                                        <FormInput payload={{...metaItem}}/>
                                    </Grid>)}
                                </Grid>
                            </Grid>
                        </div>
                        <div className="reportBody">
                            <Grid container>
                                <Grid item container>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReportCard;