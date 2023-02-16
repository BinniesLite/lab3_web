
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



interface CardProps {
    img: string;
    date: string;
    description: string;
    title: string;
}

const CustomCard = ({img, date, description, title}: CardProps) => {
  return (
    <Card variant="outlined" sx={{p: 3}}>
      <CardMedia sx={{width: {xs: '200px', md: '400px'}, height: {xs: '300px', md: '500px'} }} loading="lazy" component="img" alt={'this is new'} image={img} />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {date}
          </Typography>
          <Typography  color="text.primary" component="div">
            {title}
            </Typography>
        </CardContent>
        <CardActions >
          <div className='button-primary'>Learn More</div>
        </CardActions>
    </Card>
  ) 
}

export default CustomCard;