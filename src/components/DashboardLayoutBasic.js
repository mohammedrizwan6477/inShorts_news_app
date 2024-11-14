import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Inshort from "./Inshort";
import NewsFeed from "./NewsFeed";
import ArticleModal from "./ArticleModal";
import { Clapperboard, Component, Cpu, Cross, FlaskRound, Handshake, Trophy } from "lucide-react";
const drawerWidth = 240;
const DashboardLayoutBasic = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState("general");

  const [previewArticle, setPreviewArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerItems = [
    { text: "business", icon: <Handshake /> },
    { text: "entertainment", icon: <Clapperboard /> },
    { text: "general", icon: <Component /> },
    { text: "health", icon: <Cross /> },
    { text: "science", icon: <FlaskRound /> },
    { text: "sports", icon: <Trophy /> },
    { text: "technology", icon: <Cpu /> },
  ];

  const handleArticleClick = (article) => {
    setPreviewArticle(article);
    setModalOpen(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              <Inshort />
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {drawerItems.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setCategory(item.text)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        item.text.charAt(0).toUpperCase() + item.text.slice(1)
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <NewsFeed category={category} setPreviewArticle={handleArticleClick} />
        {
          <ArticleModal
            article={previewArticle}
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
          />
        }
      </Box>
    </>
  );
};

export default DashboardLayoutBasic;
