import React, {ReactNode} from 'react'
import { Box } from '@mui/material'


const Section = ({children}: {children: ReactNode}) => {
  return (
    <Box sx={{mx: 5, my: 8}}>
        {children}
    </Box>
  )
}

export default Section