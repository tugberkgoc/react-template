import React, { useState } from 'react'
import ComboBox from '../../components/ComboBox'
import {
  Box,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button
} from '@material-ui/core'

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 }
]

export default function SecondPart () {
  const [opts, setOpts] = useState([])

  return (
    <CardContent>
      <Grid container direction='row' alignItems='center'>
        <Box mr={5}>
          <Typography variant='h5' gutterBottom>
            Account Team
          </Typography>
        </Box>

        <Box mr={5}>
          <Typography variant='subtitle1' gutterBottom>
            CRM Account Owner
          </Typography>
        </Box>

        <ComboBox
          options={opts}
          label='Account Owner'
          onChange={() => {
            setOpts(top100Films)
          }}
        />
      </Grid>

      <Box mt={4}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          style={{
            maxWidth: '500px'
          }}
        >
          <Box>
            <Typography variant='subtitle1' gutterBottom>
              Role Code
            </Typography>
            <TextField value='CBA' variant='outlined' disabled />
          </Box>

          <Box>
            <Typography variant='subtitle1' gutterBottom>
              Role User
            </Typography>
            <TextField value='Account Team Member' variant='outlined' />
          </Box>
        </Grid>
      </Box>

      <Box mt={4}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          style={{
            maxWidth: '600px'
          }}
        >
          <Button variant='contained'>View All Account Details</Button>
          <Button variant='contained'>View Audit Trail</Button>
          <Button style={{ backgroundColor: '#4285F4', color: 'white' }}>
            Save
          </Button>
        </Grid>
      </Box>
    </CardContent>
  )
}
