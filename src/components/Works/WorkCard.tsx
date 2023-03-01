import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core';

interface CardProps {
    img: string;
    date: string;
    description: string;
    title: string;
}


const useStyles = makeStyles({
    root: {
      border: 'none',
      boxShadow: 'none',
    },
  });

  const useStyles2 = makeStyles({
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  });

const WorkCard = ({ img, date, description, title }: CardProps) => {
    const customCardStyle = useStyles();
    const customCardContent = useStyles2();


    return (
        <Card classes={{root: customCardStyle.root}} sx={{ p: 3, cursor: 'pointer' }}>
            <CardMedia sx={{ width: { xs: '300px' }, height: { xs: '300px' } }} component="img" alt={'this is new'} image={img} />
            <CardContent classes={{root: customCardContent.root}}>
                <Typography color="text.primary" fontWeight="bold" component="div">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  July 17 2023
                </Typography>
            </CardContent>
          
        </Card>
    )
}

export default React.memo(WorkCard);