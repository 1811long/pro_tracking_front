import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';

export default function ChampCard({ image, name }) {
  return (
    <Link
      to={`/champions/${name}`}
    >
      <Card
        sx={{ maxWidth: 345 }}
        href={`/champion/${name}`}
      >
        <CardActionArea>

          <CardMedia
            component="img"
            height="100"
            image={image}
            alt={name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
    </Link>
  );
}
