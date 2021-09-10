// import logo from './logo.svg'
import './App.css'
import './application.scss'
// import 'react-toastify/dist/ReactToastify.min.css'
import { useEffect, useState } from 'react'
import Dashboard from './layouts/dashboard/Index'
import Test from './views/Test'
import CrmDetails from './views/crm-details/CrmDetails'
import {
  FormControl,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Input,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  // Save as SaveIcon,
  // Delete as DeleteIcon,
  Search as SearchIcon
} from '@material-ui/icons'
import { registerIntercepts } from './apis/axios'
// import axios from 'axios'

import { ToastContainer } from 'react-toastify'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '40%',
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

function App () {
  useEffect(() => {
    registerIntercepts()
  }, [])

  const classes = useStyles()

  // const { cwid, fullName } = useContext(routesContext);

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
    <div className='App'>
      <ToastContainer />

      {/* <Butt variant='contained' color='primary'>
        <Button
          startIcon={<SaveIcon />}
          onClick={() => {
            axios.get('http://localhost:9001/test')
          }}
          href='#'
          disabled={false}
          style={{ fontSize: 12 }}
        >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => alert('discard')}
          href='#'
          style={{ fontSize: 12 }}
        >
          Discard
        </Button>
      </Butt<divonGroup> */}

      <div className='wrapper'>
        <div className='first'>
          <Dashboard />
        </div>
        <div className='second'>
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

            <Button
              onClick={() => alert('test')}
              href='#'
              style={{
                backgroundColor: '#F1F1F1',
                border: '1px solid #979797',
                color: '#4E4E4E',
                fontSize: '14px'
              }}
            >
              Enter State
            </Button>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <div>(or)</div>
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
            <Paper component='form' className={classes.root}>
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
        </div>
        <div className='third'>
          {/* <Test /> */}
          <CrmDetails />
        </div>
      </div>
    </div>
  )
}

export default App
