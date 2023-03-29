import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface CardProps {
    img: string;
    date: string;
    description: string;
    title?: string;
    id?: string | number;
    name?: string,
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

const WorkCard = ({ img, date, description, title, id }: CardProps) => {
    const customCardStyle = useStyles();
    const customCardContent: any = useStyles2(); 


    return (
        <Link to={`/work/${id}`}>
          <Card classes={{root: customCardStyle.root}} sx={{  cursor: 'pointer' }}>
              <CardMedia sx={{ width: { xs: '250px', md: "400px" }, height: { xs: '250px' } }} component="img" alt={'this is new'} image={img} />
              <CardContent classes={{root: customCardContent.root}}>
                  <Typography color="text.primary" fontWeight="bold" component="div">
                      {title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    July 17 2023
                  </Typography>
              </CardContent>
          </Card>
        </Link>
    )
}

export default React.memo(WorkCard);