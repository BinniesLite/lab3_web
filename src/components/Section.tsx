import React, {ReactNode} from 'react'
import { Box } from '@mui/material'


const Section = ({children}: {children: ReactNode}) => {
  return (
    <Box sx={{mx: 5, my: {xs: 25, md: 20}}}>
        {children}
    </Box>
  )
}

export default Section