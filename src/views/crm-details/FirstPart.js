import React from 'react'
import CrmDetailCard from './CrmDetailCard'
import { Edit as EditIcon, Close as CloseIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Tooltip,
  Typography,
  IconButton,
  CardContent
} from '@material-ui/core'

const useStyles = makeStyles({
  editIcon: {
    fontSize: 18
  }
})

export default function FirstPart ({
  state,
  setState,
  title,
  subtitle,
  address
}) {
  const classes = useStyles()

  return (
    <CardContent>
      <Grid container direction='row' alignItems='center'>
        <Box mr={5}>
          <Typography variant='h5' gutterBottom>
            {title}
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            {subtitle}
          </Typography>
        </Box>

        <Tooltip title='Edit'>
          <IconButton onClick={() => setState(!state)}>
            {!state ? (
              <EditIcon className={classes.editIcon} />
            ) : (
              <CloseIcon className={classes.editIcon} />
            )}
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid container>
        <CrmDetailCard title='Mailing Address' value={10} disabled={state} />
        <CrmDetailCard title='Status' value={10} disabled={state} status dot />
        <CrmDetailCard
          title='Account Classification'
          value={10}
          disabled={state}
        />
        <CrmDetailCard title='Phone' value={10} disabled={state} />
        <CrmDetailCard title='Email' value={10} disabled={state} />
        <CrmDetailCard
          title='Account Classification Sub Type'
          value={10}
          disabled={state}
        />
      </Grid>
    </CardContent>
  )
}
