import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface SpeakerStackProps {
  speaker: string;
  speakerTitle: string;
}

function SpeakerStack({ speaker, speakerTitle }: SpeakerStackProps) {
  const rootStyle = {
    borderLeft: `5px solid black`,
    padding: '16px',
    marginBottom: '16px',
  };
  const contentStyle = {
    marginLeft: '16px',
  };

  return (
    <Stack direction="column" my={3} alignItems="center" sx={rootStyle}>
      <Typography variant="h5">{speaker}</Typography>
      {/* Hide this box when the screen size is small */}
      <Box sx={{ display: { md: 'block' } }}>
        <Typography variant="subtitle1" color="text.secondary" sx={contentStyle}>
          {speakerTitle}
        </Typography>
      </Box>
    </Stack>
  );
}

export default SpeakerStack;