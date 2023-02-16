import React from 'react'
import Section from '../../components/Section'
// Generate a functional component called Contact
import Wrapper from '../../layout/Wrapper'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';



const Contact = () => {

  return (
    <Stack sx={{}} justifyContent="flex-start" alignItems="center" minHeight="inherit" width='100%'>
      <Box height="20vh"></Box>
      <h1>Contact</h1>
      <Stack width="50%" flexDirection="row" justifyContent="space-between">
        <Stack>
          <p>Phone: 123-456-7890</p>
        <p>Email:
          <a href="mailto:leqn@mail.uc.edu">  </a> 
        </p>
        </Stack>
        <Stack>
          dasd
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Wrapper(Contact, 'contact');