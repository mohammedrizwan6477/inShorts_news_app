import React from "react";
import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Sidebar = ({ setCategory }) => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        {categories.map((category) => (
          <ListItem button key={category} onClick={() => setCategory(category)}>
            <ListItemText
              primary={category.charAt(0).toUpperCase() + category.slice(1)}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
