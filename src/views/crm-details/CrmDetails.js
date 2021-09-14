import React, { useState } from 'react'
import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FirstPart from './FirstPart'
import SecondPart from './SecondPart'

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: 18
  }
}))

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const CrmDetails = ({ name }) => {
  const classes = useStyles()

  const [newState, setNewState] = useState(false)

  return (
    <Container>
      <Paper elevation='0' style={{ backgroundColor: 'transparent' }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/' onClick={handleClick}>
            Home
          </Link>
          <Typography color='textPrimary'>Crm Details</Typography>
        </Breadcrumbs>
      </Paper>

      <FirstPart
        state={newState}
        setState={setNewState}
        title='Tugberk Goc'
        subtitle='Software Engineer'
        address='145 SW, 13th Street, APT 745'
      />

      <Divider className={classes.divider} variant='middle' />

      <SecondPart />

      <Divider className={classes.divider} variant='middle' />
    </Container>
  )
}

export default CrmDetails
