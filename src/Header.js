import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { AccountCircle, Notifications } from '@material-ui/icons'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

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
  }
}))

export default function MenuAppBar (props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='transparent'>
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
          <div>
            {/* <IconButton
              aria-label={'account of current user'}
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              className={classes.profileIconButton}
              size={'medium'}
            >
              <Notifications />
            </IconButton> */}
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
          <div>
            <IconButton
              aria-label={'account of current user'}
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              className={classes.profileIconButton}
              size={'medium'}
            >
              <AccountCircle />
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
