import React from "react";
import { Typography, Button, Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ArticleModal = ({ article, open, handleClose }) => (
  <>
    <Modal
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      scroll
    >
      <Box
        sx={{
          ...style,
          maxWidth: "80vh",
          overflowY: "auto",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {article?.title}
        </Typography>
        <Typography>
          {article?.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: "100%" }}
            />
          )}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {article?.content}
        </Typography>
        <Button href={article?.url} target="_blank" rel="noopener noreferrer">
          Read Full Article
        </Button>
      </Box>
    </Modal>
  </>
);

export default ArticleModal;
