import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const NewsCard = ({ article, setPreviewArticle }) => (
  <Card onClick={() => setPreviewArticle(article)} sx={{ maxWidth: 345 }} >
    <CardActionArea>
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="140"
          image={article.urlToImage}
          alt={article.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default NewsCard;
