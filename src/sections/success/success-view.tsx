import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SuccessViewPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IoMdCheckmarkCircleOutline
        style={{ fontSize: "64px", color: "#4caf50" }}
      />
      <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
        Order Placed Successfully!
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Thank you for your order. Your order has been placed successfully.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default SuccessViewPage;
