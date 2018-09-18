import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import React, {Fragment} from 'react'


const SnackBar = props => {
    return (
        <Fragment>
            <Snackbar
                open={
                    props.open
                }
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                message={
                    "reviews submitted success"
                }
            />
        </Fragment>
    )
}
export default SnackBar