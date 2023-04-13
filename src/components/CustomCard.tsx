import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Work } from '../constants/work';

interface CardProps {
    img?: string;
    date?: string;
    description?: string;
    title?: string;
    id?: string | number;
    name?: string,
}

const CustomCard = ({img, date, description, title, id}: CardProps) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (img) {
      const imgElement = new Image();
      imgElement.onload = () => setImage(imgElement);
      imgElement.src = img;
    }
  }, [img]);

  return (
    <Card variant="outlined" sx={{p: 3, mx: 4 }}>
      {image && (
        <CardMedia
          sx={{minWidth: {xs: '200px', md: '400px'}, height: {xs: '300px', md: '500px'} }}
          component="img"
          image={image.src}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          July 18, 2021
        </Typography>
        <Typography  color="text.primary" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions >
        <Link to={`/work/${id}`}>
          <div className='button-primary'>Learn More</div>
        </Link>
      </CardActions>
    </Card>
  ) 
}

export default React.memo(CustomCard);