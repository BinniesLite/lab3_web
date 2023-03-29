import React from 'react';
import { Stack } from '@mui/material';
import { Avatar } from '@mui/material';



import Typography from '@mui/material/Typography';
// write an interface for OrganizerCard props
interface OrganizerCardProps {
    avatarSrc: string;
    name: string;
    title: string;
}


const OrganizerCard = ({ avatarSrc, name, title }: OrganizerCardProps) => {
  return (
    <Stack direction={{xs: 'column', md: 'row'}} my={5} spacing={5} justifyContent="center" alignItems="center">
      <Avatar sx={{height: '200px', width: '200px'}} src={avatarSrc} alt={name} />
      <Stack>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1" color="text.secondary">{title}</Typography>
        <Typography variant="subtitle1" sx={{color: 'blue'}}><a target="_blank" href="https://chriswjh.github.io/WIRL/">Website:  Dr. Jenq-Haur Wang</a></Typography>
      </Stack>
    </Stack>
  );
};

export default OrganizerCard;
