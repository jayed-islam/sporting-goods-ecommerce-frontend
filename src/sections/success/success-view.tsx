import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { orange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { paths } from "../../layouts/paths";
import ScrollToTop from "../../hooks/use-scroll-to-top";

const SuccessViewPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollToTop />
      <IoMdCheckmarkCircleOutline
        style={{ fontSize: "64px", color: "#4caf50" }}
      />
      <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
        Order Placed Successfully!
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Thank you for your order. Your order has been placed successfully.
      </Typography>
      <NavLink to={paths.root}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            bgcolor: orange[500],
            "&:hover": {
              bgcolor: orange[600],
            },
          }}
        >
          Go to Home
        </Button>
      </NavLink>
    </Container>
  );
};

export default SuccessViewPage;
