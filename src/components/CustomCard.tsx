import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import project_1 from '../assets/project_1.jpg';

interface CardProps {
    img: string;
    date: string;
    description: string;
}

const CustomCard = ({img, date, description}: CardProps) => {
  return (
    <Card variant="outlined">
      <CardMedia sx={{width: {xs: '200px', md: '400px'}}} component="img" alt={'this is new'} image={project_1} />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            July 2021
          </Typography>
          Hi guys its pewdiepie An ai That can generate fakes news and hurt the community
        </CardContent>
        <CardActions >
          <div className='button-primary'>Learn More</div>
        </CardActions>
    </Card>
  ) 
}

export default CustomCard;