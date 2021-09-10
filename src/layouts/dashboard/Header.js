import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Notifications } from '@material-ui/icons'
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  Select,
  InputBase
} from '@material-ui/core'

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    fontSize: 14,
    fontWeight: 'bold',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(2),
    color: '#4285F4',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  spacer: {
    flexGrow: 1
  },
  profileIconButton: {
    color: '#FBBC06'
  },
  notificationIconButton: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  country: {
    margin: '0px 4px 0px 0px'
  },
  countryLabel: {
    fontSize: '14px',
    color: '#4E4E4E'
  }
}))

export default function Header (props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [country, setCountry] = useState(10)
  const handleChange = event => {
    setCountry(event.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <div
            edge='start'
            className={classes.title}
            color='inherit'
            aria-label='menu'
          >
            CRM 360 {props.test}
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.countryLabel}>Country</div>
          <FormControl className={classes.country}>
            <Select
              value={country}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={10}>US</MenuItem>
              <MenuItem value={20}>Mexico</MenuItem>
              <MenuItem value={30}>Brazil</MenuItem>
            </Select>
          </FormControl>
          <div>
            <IconButton
              className={classes.notificationIconButton}
              size={'medium'}
            >
              <Notifications />
            </IconButton>
          </div>
          <div>
            <IconButton
              aria-label={'account of current user'}
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              className={classes.profileIconButton}
              size='medium'
            >
              <AccountCircle style={{ fontSize: 48 }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
