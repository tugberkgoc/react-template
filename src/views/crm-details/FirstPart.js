import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  Tooltip
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function SimpleCard ({
  state,
  setState,
  title,
  subtitle,
  address
}) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent>
        {state ? (
          <FormControl>
            <div className='firstPartTitle'>
              <Select value={10} style={{ width: '16vw' }}>
                <MenuItem value={10}>Tugberk Goc</MenuItem>
                <MenuItem value={20}>Harjot</MenuItem>
                <MenuItem value={30}>Madhavi</MenuItem>
              </Select>
              <Tooltip title='Edit'>
                <IconButton onClick={() => setState(!state)}>
                  <EditIcon style={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            </div>
          </FormControl>
        ) : (
          <>
            <div className='firstPartTitle'>
              <h4>{title}</h4>
              <Tooltip title='Edit'>
                <IconButton onClick={() => setState(!state)}>
                  <EditIcon style={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            </div>
            <h5>{subtitle}</h5>
            <div>{address}</div>
            <Typography variant='h5' component='h2'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              adjective
            </Typography>
            <Typography variant='body2' component='p'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => setState(!state)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
