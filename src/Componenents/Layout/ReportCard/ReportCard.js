import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import FormInput from "../../UI/FormInput/FormInpu";
import CourseReview from "../CourseReview/CourseReview";
import './ReportCard.scss';

const courses = ['course1', 'course2', 'course3', 'course4'];
const grades = ['grade1', 'grade2', 'grade3', 'grade4'];

class ReportCard extends React.Component {
    state = {
        reportMeta: [
            {value: new Date().getDate(), label: 'E-mail', id: 'email', type: 'date'},
            {value: '', label: 'name', id: 'studentName', type: 'text'},
            {value: '', label: 'teacher', id: 'teacherName', type: 'text'},
        ],
        coursesReviews: [
            {
                id: 1, controllers: [
                    {value: 'course1', label: 'course', id: 'course', type: 'select', options: courses},
                    {value: 'grade1', label: 'name', id: 'grade', type: 'select', options: grades},
                    {value: '', label: 'teacher', id: 'teacherName', type: 'text', multiline: true}]
            }
        ]
    }


    //change handlers
    // report meta data
    metaDataChange = ({target: {value}}, id) => {
        const updatedMetaDta = this.state.reportMeta
            .map(controller => controller.id !== id ? controller : {...controller, value});
        this.setState({
            reportMeta: updatedMetaDta
        })
    };

    // handler of reviews
    coursesReviewsHandler = ({target: {value}}, id, key) => {
        console.log(key);
        const updatedReviewsData = this.state.coursesReviews.map(review => {
            if (review.id !== key) return review;
            const newController = review.controllers
                .map(controller => controller.id !== id ? controller : {...controller, value});
            return {id: key, controllers: newController}
        })
        this.setState({
            coursesReviews: updatedReviewsData
        })
    };
    //addMoveReviews
    addMoveReviews = () => {
        const reviewsCount = this.state.coursesReviews;
        // adding new review
        const newReview = {
            id: reviewsCount + 1, controllers: [
                {value: 'course1', label: 'course', id: 'course', type: 'select', options: courses},
                {value: 'grade1', label: 'name', id: 'grade', type: 'select', options: grades},
                {value: '', label: 'teacher', id: 'teacherName', type: 'text', multiline: true}]
        }
        this.setState(prevState => ({coursesReviews: prevState.coursesReviews.concat(newReview)}));
    }
    //submit reviews
    submitReviews = (e) => {
        e.preventDefault();
        this.props.load();
        this.props.toggleSnakeBar();

        setTimeout(() => {
                this.props.load();
                this.setState({coursesReviews: []});
                this.props.toggleSnakeBar();
            }
            , 3000)
    }

    // remvoe review
    removeReview = (id) => {
        this.setState({coursesReviews: this.state.coursesReviews.filter(courseReview => courseReview.id !== id)})
    }


    render() {
        const {
            state: {
                reportMeta, coursesReviews
            },
            metaDataChange,
            coursesReviewsHandler,
            removeReview,
            submitReviews,
        }
            = this;
        return (
            <div className="reviewCard">
                <div className="container">
                    <form onSubmit={submitReviews}>
                        <div className="reportMetaData">
                            <Grid container>
                                <Grid item container justify="center">
                                    {reportMeta.map(metaItem => <Grid key={metaItem.id} item xs={12} sm>
                                        <FormInput payload={{...metaItem}} changeHandler={metaDataChange}/>
                                    </Grid>)}
                                </Grid>
                            </Grid>
                        </div>
                        <div className="reportBody">
                            {coursesReviews.map(({id, controllers}) => <CourseReview key={id}
                                                                                     remove={removeReview}
                                                                                     changeHandler={coursesReviewsHandler} review={controllers}
                                                                                     ide={id}/>)}
                        </div>
                        <div className="formAction">
                            <Button type="submit" variant="extendedFab" color="primary" className="submitFab">
                                save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReportCard;