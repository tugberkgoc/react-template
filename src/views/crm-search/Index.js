import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Search as SearchIcon } from '@material-ui/icons'
import {
  Grid,
  Input,
  Paper,
  Select,
  Button,
  MenuItem,
  TextField,
  InputBase,
  IconButton,
  FormControl
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  search: {
    margin: theme.spacing(2),
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '60%',
    border: '0.5px solid #C7C7C7',
    backgroundColor: '#F6F6F6',
    borderRadius: '15px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 5,
    backgroundColor: '#4285F4',
    color: 'white'
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
    padding: '13px'
  },
  uploadInput: {
    display: 'none'
  },
  addressTextField: {
    backgroundColor: '#F1F1F1',
    border: '1px solid #979797',
    color: '#4E4E4E'
  }
}))

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export default function CrmSearch () {
  const classes = useStyles()

  const [personName, setPersonName] = useState([])

  const submit = file => {
    const reader = new FileReader()

    reader.onload = function (e) {
      const text = e.target.result
      console.log(text)
    }

    reader.readAsText(file)
  }

  const handleChange = event => {
    setPersonName(event.target.value)
  }

  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <div>Classification Label:</div>
        <FormControl className={classes.formControl}>
          <Select
            labelId='demo-mutiple-name-label'
            id='demo-mutiple-name'
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>Status :</div>
        <FormControl className={classes.formControl}>
          <Select multiple input={<Input />}></Select>
        </FormControl>

        <div>Address :</div>
        <FormControl className={classes.formControl}>
          <Select multiple input={<Input />}></Select>
        </FormControl>
        <TextField
          className={classes.addressTextField}
          label='Enter State'
          variant='outlined'
        />
      </Grid>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <FormControl className={classes.formControl}>
          <input
            accept='.csv'
            className={classes.uploadInput}
            id='contained-button-file'
            type='file'
            onChange={e => submit(e.target.files[0])}
          />
          <label htmlFor='contained-button-file'>
            <Button
              style={{
                backgroundColor: '#4285F4',
                color: 'white',
                border: '1px solid #598CE1',
                borderRadius: '8px'
              }}
              variant='contained'
              component='span'
            >
              Import
            </Button>
          </label>
        </FormControl>
        <div>CRM(s) from your computer</div>
      </Grid>

      <Grid container justifyContent='center'>
        <Paper component='form' className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder='Search by CRN Name ...'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='search'
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </>
  )
}
