import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import NewsCard from "./NewsCard";

const NewsFeed = ({ category, setPreviewArticle }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines`,
          {
            params: {
              category,
              apiKey: process.env.REACT_APP_NEWS_API_KEY,
              country: "us",
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchArticles();
  }, [category]);

  return (
    <Grid container spacing={2} p={2} sx={{
      maxHeight: "calc(100vh - 64px)",
      overflowY: "auto",
      paddingTop: "64px",
      position: "relative",
    }}>
      {articles.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          No news available for this category.
        </Typography>
      ) : (
        articles.map((article, index) => (
          <Grid container item xs={12} key={index} direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
            <NewsCard article={article} setPreviewArticle={setPreviewArticle} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default NewsFeed;
