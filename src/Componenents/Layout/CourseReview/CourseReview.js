import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Paper from "@material-ui/core/Paper/Paper";
import React from 'react'
import FormInput from "../../UI/FormInput/FormInpu";

const CourseReview = props => {
    const {review, changeHandler, ide,addMoveReviews} = props;
    return (
        <div>
            <Paper elevation={1}>
                <Grid container>
                    <Grid item container>
                        <Grid xs={12} md={11} container>
                            {review && review.map(review => <Grid xs={12} md>
                                <FormInput payload={{...review, other:ide}} changeHandler={changeHandler}/>
                            </Grid>)}
                        </Grid>
                        <Grid>
                            <Button variant="fab" color="primary" onClick={addMoveReviews}><Icon>add</Icon></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default CourseReview