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
        padding: '1rem'
    }
})

const CourseReview = props => {
    const {review, changeHandler, ide, remove, classes} = props;
    return (
        <div className="courseReview">
            <Slide in={!!review} unmountOnExit mountOnEnter>
                <Paper elevation={5} className={classes.paper}>
                    <Grid container>
                        <Grid item container>
                            <Grid item xs={12} md={11} container alignItems="center">
                                {review && review.map(review => <Grid item xs={12} sm>
                                    <FormInput payload={{...review, other: ide, classes: review.multiline ? ['fullWidth'] : null}}
                                               changeHandler={changeHandler}/>
                                </Grid>)}
                            </Grid>
                            <Grid xs item container justify="center" alignItems="center">
                                <Grid>
                                    <Tooltip title="remove course review">
                                        <Button variant="fab" color="secondary" className="newReviewFap" onClick={_ => remove(ide)}><Icon>delete</Icon></Button>
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