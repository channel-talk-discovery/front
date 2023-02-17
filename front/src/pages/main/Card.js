import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MainCard() {
  return (
    <Card sx={{ maxWidth: 345, padding: 1 }}>
      <CardActionArea onClick={() => alert("상대 페이지로 이동해야한다네")}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt="place"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            서울시 마포구 서교동 450
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
