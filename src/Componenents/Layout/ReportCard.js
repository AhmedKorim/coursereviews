import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import FormInput from "../UI/FormInput/FormInpu";
import CourseReview from "./CourseReview/CourseReview";

const courses = ['course1', 'course2', 'course3', 'course4'];
const grades = ['grade1', 'grade2', 'grade3', 'grade4'];

class ReportCard extends React.Component {
    state = {
        reportMeta: [
            {value: '', label: 'E-mail', id: 'email', type: 'date'},
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


    render() {
        const {
            state: {
                reportMeta, coursesReviews
            },
            metaDataChange,
            coursesReviewsHandler,
            addMoveReviews
        }
            = this;
        return (
            <div className="reviewCard">
                <div className="container">
                    <form>
                        <div className="reportMetaData">
                            <Grid container>
                                <Grid item container>
                                    {reportMeta.map(metaItem => <Grid key={metaItem.id} item xs={12} md>
                                        <FormInput payload={{...metaItem}} changeHandler={metaDataChange}/>
                                    </Grid>)}
                                </Grid>
                            </Grid>
                        </div>
                        <div className="reportBody">
                            {coursesReviews.map(({id, controllers}) => <CourseReview key={id}
                                                                                     addMoveReviews={addMoveReviews}
                                                                                     changeHandler={coursesReviewsHandler} review={controllers}
                                                                                     ide={id}/>)}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReportCard;