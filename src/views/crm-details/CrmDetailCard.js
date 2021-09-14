import React from 'react'
import {
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme, dot) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  active: {
    height: '10px',
    width: '10px',
    backgroundColor: 'green',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '6px'
  },
  inactive: {
    height: '10px',
    width: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '6px'
  },
  nonEditable: {
    width: '300px'
  },
  editable: {
    width: '300px',
    border: '0.1rem solid blue'
  }
}))

const CrmDetailCard = ({
  title,
  value,
  disabled = false,
  dot = false,
  status = false
}) => {
  const classes = useStyles()

  const [age, setAge] = React.useState('')

  const handleChange = event => {
    console.log(age)
    setAge(event.target.value)
  }

  return (
    <Grid item xs={4} container justifyContent='center' alignItems='center'>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          onChange={handleChange}
          disabled={!disabled}
          className={disabled ? classes.editable : classes.nonEditable}
        >
          <MenuItem value={10}>
            {status && (
              <span className={dot ? classes.active : classes.inactive}></span>
            )}
            Active
          </MenuItem>
          <MenuItem value={20}>Inactive</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default CrmDetailCard
