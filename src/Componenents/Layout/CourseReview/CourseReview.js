import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Paper from "@material-ui/core/Paper/Paper";
import Slide from "@material-ui/core/Slide/Slide";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import React from 'react'
import FormInput from "../../UI/FormInput/FormInpu";
import './CourseReview.scss';

const styles = theme => ({
    paper: {
        backgroundColor: theme.palette.background.default,
        borderRadius: 0,
    }
})

const CourseReview = props => {
    const {review, changeHandler, ide, addMoveReviews, classes} = props;
    return (
        <div className="courseReview">
            <Slide in={!!review} unmountOnExit mountOnEnter>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container>
                        <Grid item container>
                            <Grid item xs={12} md={11} container alignItems="center">
                                {review && review.map(review => <Grid xs={12} md>
                                    <FormInput payload={{...review, other: ide, classes: review.multiline ? ['fullWidth'] : null}}
                                               changeHandler={changeHandler}/>
                                </Grid>)}
                            </Grid>
                            <Grid xs item container justify="center" alignItems="center">
                                <Grid>
                                    <Tooltip title="add new course review">
                                        <Button variant="fab" color="primary" className="newReviewFap" onClick={addMoveReviews}><Icon>add</Icon></Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </div>
    )
}
export default withStyles(styles)(CourseReview);