import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  listItem: {
    fontSize: '16px',
    padding: '2px',
    fontWeight: 'bold',
    textAlign: 'center',
    '&:hover': {
      color: 'red'
    },
    margin: '10px'
  }
}))

const data = [
  { id: 1, name: 'John Mcanzee' },
  { id: 2, name: 'Tom Tugdas' },
  { id: 3, name: 'Kelly Lorem' },
  { id: 4, name: 'Murda Ipsum' },
  { id: 5, name: 'Madhavi Lorem' },
  { id: 6, name: 'Harjot' },
  { id: 7, name: 'Tugberk' },
  { id: 8, name: 'Luke' },
  { id: 9, name: 'Darth' },
  { id: 10, name: 'Vader' },
  { id: 11, name: 'Rihanna' }
]

export default function Test (props) {
  const classes = useStyles()

  return (
    <Container>
      <Grid container style={{ marginTop: '50px' }}>
        {data.map(item => {
          return (
            <Grid item xs={2}>
              <div className={classes.listItem}>{item.name}</div>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
