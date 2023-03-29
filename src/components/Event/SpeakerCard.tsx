import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    borderLeft: `5px solid black`,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    marginLeft: theme.spacing(2),
  },
}));

function SpeakerStack({ speaker, speakerTitle } :{ speaker: string, speakerTitle: string }) {
  const classes = useStyles();
  

  return (
    <Stack direction="column" my={3} alignItems="center" className={classes.root}>
      <Typography variant="h5">{speaker}</Typography>
      {/* Hide this box when the screen size is small */}
      <Box sx={{display: {md: 'block',}}} >
          <Typography variant="subtitle1" color='text.secondary' className={classes.content}>
            {speakerTitle}
          </Typography>
      </Box>
    </Stack>
  );
}

export default SpeakerStack;