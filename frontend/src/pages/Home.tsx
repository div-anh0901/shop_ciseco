import { Grid ,Container, Typography} from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Nabar'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <Grid>
        <Navbar/>
        <Banner/>
        <Grid container>
          <Typography>
            Discover more.
          </Typography>
        </Grid>
    </Grid>
  )
}
