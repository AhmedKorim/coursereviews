import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import FormInput from "../../UI/FormInput/FormInpu";
import CourseReview from "../CourseReview/CourseReview";
import './ReportCard.scss';


const courses = ['الدرس1', 'الدرس2', 'الدرس3', 'الدرس4'];
const grades = ['الدرس1', 'الدرس2', 'الدرس3', 'الدرس4'];
const gradesEN = ['degree1', 'degree2', 'degree3', 'degree4'];
const coursesen = ['course1', 'course2', 'course3', 'course4'];

class ReportCard extends React.Component {

    constructor(props) {
        super(props);
        const rtl = this.props.rtl;
        this.state = {
            arabic: !!rtl,
            reportMeta: [
                {value: new Date().getDate(), label: rtl ? 'التاريخ' : 'date', id: 'email', type: 'date'},
                {value: '', label: rtl ? 'الاسم' : 'name', id: 'studentName', type: 'text'},
                {value: '', label: rtl ? 'المعلم' : 'teacher', id: 'teacherName', type: 'text'},
            ],
            coursesReviews: [
                {
                    id: 1, controllers: [
                        {
                            value: rtl ? courses[0] : coursesen[0],
                            label: rtl ? 'الدروس' : 'course',
                            id: 'class',
                            type: 'select',
                            options: rtl ? courses : coursesen
                        },
                        {value: rtl ? grades[0] : gradesEN[0], label: rtl ? 'الدرجه' : 'degree', id: 'grade', type: 'select', options: rtl ? grades : gradesEN},
                        {value: '', label: rtl ? 'تعليق' : 'comment', id: 'comment', type: 'text', multiline: true}]
                }
            ]
        }
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

    componentDidUpdate() {
        if (this.state.arabic === this.props.rtl) return;
        const rtl = !!this.props.rtl;
        this.setState({
            arabic: !!rtl,
            reportMeta: [
                {value: new Date().getDate(), label: rtl ? 'التاريخ' : 'date', id: 'email', type: 'date'},
                {value: '', label: rtl ? 'الاسم' : 'name', id: 'studentName', type: 'text'},
                {value: '', label: rtl ? 'المعلم' : 'teacher', id: 'teacherName', type: 'text'},
            ],
            coursesReviews: [
                {
                    id: 1, controllers: [
                        {
                            value: rtl ? courses[0] : coursesen[0],
                            label: rtl ? 'الدروس' : 'course',
                            id: 'class',
                            type: 'select',
                            options: rtl ? courses : coursesen
                        },
                        {value: rtl ? grades[0] : gradesEN[0], label: rtl ? 'الدرجه' : 'degree', id: 'grade', type: 'select', options: rtl ? grades : gradesEN},
                        {value: '', label: rtl ? 'تعليق' : 'comment', id: 'comment', type: 'text', multiline: true}]
                }
            ]
        })
    }

    // handler of reviews
    coursesReviewsHandler = ({target: {value}}, id, key) => {
        console.log(key);
        const updatedReviewsData = this.state.coursesReviews.map(review => {
            if (review.id !== key) return review;
            const newController = review.controllers
                .map(controller => controller.id !== id ? controller : {...controller, value});
            console.log(key, review.id);
            return {id: review.id, controllers: newController}
        })
        this.setState({
            coursesReviews: updatedReviewsData
        })
    };
    //addMoveReviews
    addMoveReviews = () => {
        const reviewsCount = this.state.coursesReviews;
        // adding new review
        const rtl = this.props.rtl
        const newReview = {
            id: reviewsCount + new Date().getTime(), controllers: [
                {
                    value: rtl ? courses[0] : coursesen[0],
                    label: rtl ? 'الدروس' : 'course',
                    id: 'class',
                    type: 'select',
                    options: rtl ? courses : coursesen
                },
                {value: rtl ? grades[0] : gradesEN[0], label: rtl ? 'الدرجه' : 'degree', id: 'grade', type: 'select', options: rtl ? grades : gradesEN},
                {value: '', label: rtl ? 'تعليق' : 'comment', id: 'comment', type: 'text', multiline: true}]
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
                            {coursesReviews.map(({id, controllers}) => <CourseReview rtl={this.props.rtl} key={id}
                                                                                     remove={removeReview}
                                                                                     changeHandler={coursesReviewsHandler} review={controllers}
                                                                                     ide={id}/>)}
                        </div>
                        <div className="formAction">
                            <Button type="submit" variant="extendedFab" color="primary" className="submitFab">
                                {this.props.rtl ? "حفظ" : 'save'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReportCard;