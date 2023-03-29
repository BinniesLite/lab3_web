import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface CardProps {
  img: string;
  date: string;
  description: string;
  title?: string;
  id?: string | number;
  name?: string,
}

const WorkCard = ({ img, date, description, title, id }: CardProps) => {

  return (
    <Link to={`/work/${id}`}>
      <Card sx={{ border: 'none', boxShadow: 'none', cursor: 'pointer' }}>
        <CardMedia
          component="img"
          alt="this is new"
          image={img}
          sx={{ width: { xs: '250px', md: '400px' }, height: { xs: '250px' } }}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Typography color="text.primary" fontWeight="bold" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default React.memo(WorkCard);