import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { greenColor } from 'assets/constants';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid sx={{margin:'auto'}} item xs={2} md={5}>
      <CardActionArea component="a" href="#">
        <Card sx={{height:"10vh"}}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between',}}>
          <CardMedia
            component="img"
            sx={{ width: 100, height:60, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
            <Box sx={{p:1}}>
              <Typography sx={{textAlign:"center",pd:3}} align="center" variant="subtitle1">
                {post.title}
              </Typography>
              <Box sx={{display:'flex'}}>
              <LocationOnIcon sx={{pt:0.5, width:'20px', height:'20px'}}/>
              <Typography sx={{textAlign:"center"}} align="center" variant="subtitle1">
                {post.date}
              </Typography>
              </Box>
            </Box>
            <Typography sx={{pt:2, color: greenColor}} variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent> 
        </Card>
      </CardActionArea>
    </Grid>
  );
}