import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import React, {Fragment} from 'react'

const FormInput = props => {
    const formcontroller = ({
                                type = "text",
                                label,
                                multiline = false,
                                value,
                                id,
                                placeHolder,
                                changeHandler,
                                options = [],
                                classes
                            }) => {
        classes = classes || [];

        switch (type) {
            case 'select':
                return (
                    <TextField
                        select
                        name={id}
                        id={id}
                        label={label}
                        className={classes.join(' ')}
                        value={value}
                        onChange={(event) => changeHandler(event, id)}
                    >
                        {options.map(option => <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>)}
                    </TextField>)
            default :
                return (<TextField
                    id={id}
                    name={id}
                    label={label}
                    type={multiline ? null : type}
                    multiline={multiline}
                    classes=
                        {multiline ? {
                            root: 'textArea'
                        } : null}
                    rows={multiline ? '8' : null}
                    placeholder={placeHolder}
                    className={classes.join(' ')}
                    value={value}
                    onChange={(event) => changeHandler(event, id)}
                    margin="normal"
                />)

        }
    }
    const {payload, changeHandeler} = props;

    return (
        <Fragment>
            {formcontroller(payload )}
        </Fragment>
    )
}
export default FormInput