import React from 'react'
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Breadcrumbs,
  Link,
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const CrmDetails = ({ name }) => {
  const classes = useStyles()

  return (
    <div>
      <Container>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>
              Search Result for Adolp Weinke
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}

        <Paper elevation='0' style={{ backgroundColor: 'transparent' }}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link color='inherit' href='/' onClick={handleClick}>
              Home
            </Link>
            <Typography color='textPrimary'>Crm Details</Typography>
          </Breadcrumbs>
        </Paper>
      </Container>
    </div>
  )
}

export default CrmDetails
